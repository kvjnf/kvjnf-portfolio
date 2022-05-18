import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Asset, Entry, EntryCollection } from 'contentful';
import { IAbout, IBlogPost, IBlogPostFields, IExperience } from '../../@types/generated/contentful'

const baseQuery = fetchBaseQuery({
  baseUrl: `https://cdn.contentful.com/spaces/${process.env.REACT_APP_SPACE_ID}/environments/${process.env.REACT_APP_ENV_ID}`,
  prepareHeaders: (headers) => {
    headers.set('Authorization', `Bearer ${process.env.REACT_APP_CONTENTFUL_DELIVERY_TOKEN}`);
    return headers;
  }
})

export const contentApi = createApi({
  baseQuery,
  endpoints: (builder) => ({
    getAbout: builder.query<EntryCollection<IAbout>, void>({
      query: () => ({
        url: '/entries',
        params: {
          content_type: 'about'
        }
      })
    }),
    getExperience: builder.query<EntryCollection<IExperience>, void>({
      query: () => ({
        url: '/entries',
        params: {
          content_type: 'experience',
          order: '-fields.date_start'
        }
      })
    }),
    getProjects: builder.query<EntryCollection<IBlogPost>, void>({
      query: () => ({
        url: '/entries',
        params: {
          select: 'sys.id,fields.title,fields.slug,fields.thumbnail',
          content_type: 'blogPost'
        }
      })
    }),
    getProject: builder.query<EntryCollection<IBlogPost>, string>({
       query: (slug) => ({
         url: `/entries`,
         params: {
          'fields.slug': slug,
          content_type: 'blogPost'
         }
       }),
       transformResponse: (res: EntryCollection<IBlogPost>) => {
          const resources = getResourcesFromAsset(res.includes.Asset);
          const item = res.items[0];

          return {
            id: item.sys.id,
            resources,
            fields: Object.entries(item.fields).reduce((accumulator, [key, data]: [string, Entry<IBlogPostFields>]) => {
              if (data.sys) {
                data = getIdForMediaField(data);
              }

              if (key === 'captures' && Array.isArray(data)) {
                data = data.map(getIdForMediaField);
              }

              return {
                ...accumulator,
                [key]: data
              }
            }, {})
          }
        }
     })
  })
});

export const { useGetAboutQuery, useGetExperienceQuery, useGetProjectsQuery, useGetProjectQuery } = contentApi;

function getResourcesFromAsset(Asset: Asset) {
  return Asset.reduce((accumulator, asset) => ({
    ...accumulator, 
    [asset.sys.id]: asset.fields.file.url,
  }), {});
}

function getIdForMediaField(media: Asset) {
  return media.sys.id;
}

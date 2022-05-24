import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Asset, EntryCollection } from 'contentful';
import { IAboutFields, IBlogPost, IBlogPostFields } from '../../@types/generated/contentful'
import { IExperienceFields } from '../../@types/generated/contentful.d';
import { ThumbNail } from '../components/uiParts/ThumbNails/ThumbNailsMini/ThumbNailsMini';

type AssetResources = Record<string, string>;

interface TransformedProjectFields {
  title: string;
  /** Slug */
  slug: string;
  /** Thumbnail */
  thumbnail: any;
  /** PC Capture */
  pcCapture?: any;
  /** SP Capture */
  spCapture?: any;
  /** client */
  client?: string;
  /** Description */
  description: string;
  /** Captures */
  captures?: string[];
  /** Publish Date */
  publishDate: string;
  /** Tags */
  tags?: ("general" | "javascript" | "static-sites")[] | undefined;
}
interface IBlogPostTransformed {
  id: string,
  resources: AssetResources,
  fields: TransformedProjectFields,
}

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
    getAbout: builder.query<EntryCollection<IAboutFields>, void>({
      query: () => ({
        url: '/entries',
        params: {
          content_type: 'about'
        }
      })
    }),
    getExperience: builder.query<EntryCollection<IExperienceFields>, void>({
      query: () => ({
        url: '/entries',
        params: {
          content_type: 'experience',
          order: '-fields.date_start'
        }
      }),
    }),
    getProjects: builder.query<ThumbNail[], void>({
      query: () => ({
        url: '/entries',
        params: {
          select: 'sys.id,fields.title,fields.slug,fields.thumbnail',
          content_type: 'blogPost'
        }
      }),
      transformResponse: (res: EntryCollection<IBlogPostFields>) => {
        const assets: Asset[] = res?.includes?.Asset ?? [];
        const resources = assets.reduce<Record<string, string>>((accumulator, asset: Asset) => ({
          ...accumulator,
          [asset.sys.id]: asset.fields.file.url,
        }), {});

        return res.items.map(({ sys: { id }, fields: { slug, title, thumbnail } }) => ({
          id,
          title,
          slug,
          src: resources[thumbnail.sys.id]
        }));
      }
    }),
    getProject: builder.query<IBlogPostTransformed, string>({
       query: (slug) => ({
         url: `/entries`,
         params: {
          'fields.slug': slug,
          content_type: 'blogPost'
         }
       }),
       // @todo koko 
       transformResponse: (res: EntryCollection<IBlogPostFields>): IBlogPostTransformed => {
          const resources = getResourcesFromAsset(res.includes.Asset);
          const item = res.items[0];

          return {
            id: item.sys.id,
            resources,
            fields: Object.keys(item.fields).reduce<TransformedProjectFields>((accumulator, key) => {
              if (['thumbnail', 'pcCapture', 'spCapture'].includes(key)) {
                return {
                  ...accumulator,
                  [key]: getIdForMediaField(item.fields[key] as Asset)
                }
              }
  
              if (key === 'captures') {
                return {
                  ...accumulator,
                  captures: (item.fields[key] as Asset[]).map(getIdForMediaField)
                }
              }
  
              return {
                ...accumulator,
                [key]: item.fields[key]
              }
            }, {} as TransformedProjectFields)
  
          }
        }
     })
  })
});

export const { useGetAboutQuery, useGetExperienceQuery, useGetProjectsQuery, useGetProjectQuery } = contentApi;

function getResourcesFromAsset(Asset: Asset[]): AssetResources {
  return Asset.reduce((accumulator, asset) => ({
    ...accumulator, 
    [asset.sys.id]: asset.fields.file.url,
  }), {});
}

function getIdForMediaField(media: Asset) {
  return media.sys.id;
}

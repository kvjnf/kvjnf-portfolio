import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

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
    getAbout: builder.query({
      query: () => ({
        url: '/entries',
        params: {
          content_type: 'about'
        }
      })
    }),
    getExperience: builder.query({
      query: () => ({
        url: '/entries',
        params: {
          content_type: 'experience'
        }
      })
    }),
    getProjects: builder.query({
      query: () => ({
        url: '/entries',
        params: {
          select: 'sys.id,fields.title,fields.slug,fields.thumbnail',
          content_type: 'blogPost'
        }
      })
    }),
    getProject: builder.query({
       query: (slug) => ({
         url: `/entries`,
         params: {
          'fields.slug': slug,
          content_type: 'blogPost'
         }
       })
    })
  })
});

export const { useGetAboutQuery, useGetExperienceQuery, useGetProjectsQuery, useGetProjectQuery } = contentApi;

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
    })
  })
});

export const { useGetAboutQuery, useGetExperienceQuery } = contentApi;

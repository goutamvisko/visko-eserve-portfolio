import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import baseUrl from '../../api/BaseUrl'

export const inquiryApi = createApi({
  reducerPath: 'inquiryApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    // credentials: 'include',
    // prepareHeaders: (headers) => {
    //   const token = localStorage.getItem('token'); 
    //   if (token) {
    //     headers.set('authorization', `Bearer ${token}`); 
    //   }
    //   return headers;
    // },
  }),
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    createInquiry: builder.mutation({
      query: (formData) => ({
        url: '/crm/leads/create-lead',
        method: 'POST',
        body: formData,
      }),
    }),
  }),
});

export const {
  useCreateInquiryMutation,
} = inquiryApi;

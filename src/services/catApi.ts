import {API_BASE_URL, API_KEY} from "@env"
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { profileType } from '~types/profileType';

export const catApi = createApi({
    reducerPath: 'catApi',
    baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
    endpoints: (builder) => ({
      getCatProfilesPool: builder.query<profileType[], void>({
        query: () => 'images/search?limit=25&has_breeds=1', 
      }),
      
      getCatProfileInfo: builder.query<profileType, string>({
        query: (id) => `images/${id}`,
      }),

      postCatProfile: builder.mutation<void, Partial<profileType>>({
        query: (id) => ({
          url: `${API_BASE_URL}/votes`,
          method: 'POST',
          headers: {
            "x-api-key": API_KEY
          },
          body: {
            image_id:id,
            value: 1
        },
        }),
      }),
    }),
  })
  
  // Export hooks for usage in functional components
  export const { 
    useGetCatProfilesPoolQuery, 
    useGetCatProfileInfoQuery, 
    usePostCatProfileMutation 
  } = catApi;

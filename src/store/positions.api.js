import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const positionsApi = createApi({
  reducerPath: 'positionsApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_APP_API_URL }),
  endpoints: (builder) => ({
    fetchPositions: builder.query({
      query: () => `/positions`,
    }),
  }),
});

export const { useFetchPositionsQuery } = positionsApi;

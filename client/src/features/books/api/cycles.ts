import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cyclesApi = createApi({
  reducerPath: 'cyclesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'api' }),
  endpoints: (builder) => ({
    getAllCycles: builder.query<string[], void>({
      query: () => '/cycles',
    }),
  }),
});

export const { useGetAllCyclesQuery } = cyclesApi;

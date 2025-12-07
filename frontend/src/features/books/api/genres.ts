import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const genresApi = createApi({
  reducerPath: 'genresApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'api' }),
  endpoints: (builder) => ({
    getAllGenres: builder.query<string[], void>({
      query: () => '/genres',
    }),
  }),
});

export const { useGetAllGenresQuery } = genresApi;

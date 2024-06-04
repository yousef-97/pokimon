// Need to use the React-specific entry point to import `createApi`
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Pokimon {
  id: number;
  quote: string;
  author: string;
}

interface PokimonsApiResponse {
  quotes: Pokimon[];
  total: number;
  skip: number;
  limit: number;
}

const BASE_URL = 'https://pokeapi.co/api/v2';

const QUERY_REDUCER_PATHS = {
  POKIMONS_LIST: 'POKIMONS_LIST',
  POKIMON_DETAILS: 'POKIMON_DETAILS',
};
const QUERY_REDUCER_TAGS = {
  GET_POKIMONS: 'GET_POKIMONS',
  GET_POKIMON: 'GET_POKIMON',
};
const END_POINTS = 'pokemon';

export const pokimonsApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}/${END_POINTS}` }),
  reducerPath: QUERY_REDUCER_PATHS.POKIMONS_LIST,
  tagTypes: [QUERY_REDUCER_TAGS.GET_POKIMONS],
  endpoints: (build) => ({
    getPokimons: build.query<PokimonsApiResponse, number>({
      query: (count = 20) => `?count=${count}`,
      providesTags: (result, error, id) => {
        return [{ type: QUERY_REDUCER_TAGS.GET_POKIMONS, id }];
      },
    }),
    getPokimon: build.query<PokimonsApiResponse, string>({
      query: (id) => `/${id}`,
      providesTags: (result, error, id) => [{ type: QUERY_REDUCER_TAGS.GET_POKIMON, id }],
    }),
  }),
});

export const { useGetPokimonsQuery, useGetPokimonQuery } = pokimonsApiSlice;

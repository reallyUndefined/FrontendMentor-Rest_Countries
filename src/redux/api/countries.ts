import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Country {
  name: string;
  capital: string;
  region: string;
  population: number;
  flag: string;
  independent: boolean;
}

export const countriesApi = createApi({
  reducerPath: "countries",
  baseQuery: fetchBaseQuery({ baseUrl: "https://restcountries.com" }),
  endpoints: (builder) => ({
    getAllCountries: builder.query<Country[], void>({
      query: () => "/v2/all?fields=name,population,region,capital,flag",
    }),
  }),
});

export const { useGetAllCountriesQuery } = countriesApi;

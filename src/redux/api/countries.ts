import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Country {
  name: "Afghanistan";
  capital: "Kabul";
  region: "Asia";
  population: 40218234;
  independent: false;
}

export const countriesApi = createApi({
  reducerPath: "countries",
  baseQuery: fetchBaseQuery({ baseUrl: "https://restcountries.com" }),
  endpoints: (builder) => ({
    getAllCountries: builder.query<Country[], void>({
      query: () => "/v2/all?fields=name,population,region,capital",
    }),
  }),
});

export const { useGetAllCountriesQuery } = countriesApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Country {
  name: string;
  capital: string;
  region: string;
  population: number;
  flag: string;
  alpha3Code: string;
}

interface CountryDetails extends Country {
  nativeName: string;
  subregion: string;
  topLevelDomain: string[];
  currencies: { code: string; name: string; symbol: string }[];
  languages: { name: string }[];
  borders: string[];
}

export const countriesApi = createApi({
  reducerPath: "countries",
  baseQuery: fetchBaseQuery({ baseUrl: "https://restcountries.com" }),
  endpoints: (builder) => ({
    getAllCountries: builder.query<Country[], void>({
      query: () => ({
        url: "/v2/all",
        params: {
          fields: [
            "name",
            "population",
            "region",
            "capital",
            "flag",
            "alpha3Code",
          ],
        },
      }),
    }),
    getCountryDetails: builder.query<CountryDetails, string>({
      query: (name) => ({
        url: `/v2/alpha/${name}`,
        params: {
          fields: [
            "name",
            "population",
            "region",
            "capital",
            "flag",
            "topLevelDomain",
            "nativeName",
            "currencies",
            "subregion",
            "borders",
            "languages",
          ],
        },
      }),
    }),
  }),
});

export const { useGetAllCountriesQuery, useGetCountryDetailsQuery } =
  countriesApi;

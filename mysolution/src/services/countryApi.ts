import { createApi , fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const countryApi = createApi({
    reducerPath: "countryApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://restcountries.com/v3.1/" }),
    endpoints: (builder) => ({
        getCountryByName: builder.query({
            query: (name) => `name/${name}`,
        }),
        getCountryByRegion: builder.query({
            query: (region) => `region/${region}`,
        }),
        getAllCountry: builder.query({
            query: () => `all`,
        }),
        getExactCountry: builder.query({
            query: (name) => `name/${name}?fullText=true`,
        }),
    }),
});

export const { useGetCountryByNameQuery, useGetCountryByRegionQuery,useGetAllCountryQuery , useGetExactCountryQuery } =countryApi;
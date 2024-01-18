import { configureStore } from "@reduxjs/toolkit";
import CountryReducer from "../features/countrySlice";
import { countryApi } from "../services/countryApi";

export const makeStore = () => {
  return configureStore({
    reducer: {
      country: CountryReducer,
      [countryApi.reducerPath]: countryApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(countryApi.middleware),
  });
};

export const store = makeStore();
export type AppStore = ReturnType<typeof makeStore>;

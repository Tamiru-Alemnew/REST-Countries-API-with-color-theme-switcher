import { createSlice } from "@reduxjs/toolkit";

const CountrySlice = createSlice({
  name: "Country",
  initialState: {
    Country: [],
  },
  reducers: {
    setCountry: (state, action) => {
      state.Country = action.payload;
    },
  },

});

export const { setCountry } = CountrySlice.actions;

export default CountrySlice.reducer;
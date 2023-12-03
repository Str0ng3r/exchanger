import { createSlice } from "@reduxjs/toolkit";

const valuteSlice = createSlice({
  name: "valuts",
  initialState: {
    usd: "",
    eur: "",
    pln: "",
    czk: "",
    gel: "",
    rub: "",
  },
  reducers: {
    setEur: (state, action) => {
      state.eur = action.payload;
    },
    setUsd: (state, action) => {
      state.usd = action.payload;
    },
    setPln: (state, action) => {
      state.pln = action.payload;
    },
    setCzk: (state, action) => {
      state.czk = action.payload;
    },
    setGel: (state, action) => {
      state.gel = action.payload;
    },
    setRub: (state, action) => {
      state.rub = action.payload;
    },
  },
});

// Directly destructure actions from valuteSlice
export const { setEur, setPln, setUsd, setCzk, setGel, setRub } =
  valuteSlice.actions;

export const mainReducer = valuteSlice.reducer;

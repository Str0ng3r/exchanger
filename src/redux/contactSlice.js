import { createSlice } from '@reduxjs/toolkit';

const valuteSlice = createSlice({
    name: 'valuts',
    initialState: {
        usd: '',
        eur: '',
        pln: '',
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
    },
});

// Directly destructure actions from valuteSlice
export const { setEur, setPln, setUsd } = valuteSlice.actions;

export const mainReducer = valuteSlice.reduce
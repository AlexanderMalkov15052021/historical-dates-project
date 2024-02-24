import { Dates } from "shared";
import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

interface DatesState {
    authToken: string | null,
    dates: Dates[],
    loading: boolean,
    error: string | null,
}

const initialState = {
    authToken: null,
    dates: [],
    loading: false,
    error: null,
} as DatesState;

export const datesStateSlice = createSlice({
    name: "datesState",
    initialState: initialState,
    reducers: {
        setDatesData: (state, action) => {
            state.dates = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(HYDRATE, (state, action: any) => {
            return { ...state, ...action.payload.datesState };
        });
    },
});

export const { setDatesData } = datesStateSlice.actions;

export default datesStateSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "count",     // Name
    initialState: {      // State
        count: 0,
    },
    reducers: {        // Actions
        increment: (state) => {
            state.count++;
        },
        decrement: (state) => {
            state.count--;
        },
    },
});

export const {increment, decrement} = counterSlice.actions
export default counterSlice.reducer;
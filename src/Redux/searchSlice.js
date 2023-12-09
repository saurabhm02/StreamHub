import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {   },
    reducers: {
        chacheRessults: (state, action) => {
            state = Object.assign(state, action.payload);
        },
    },
});

export const { chacheRessults } = searchSlice.actions;
export default searchSlice.reducer;
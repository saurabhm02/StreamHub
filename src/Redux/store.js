import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import categorySlice from "./categorySlice";

const store = configureStore({
    reducer: {
        app: appSlice,
        search: searchSlice,
        VideosCategory: categorySlice,
    },
});

export default store;

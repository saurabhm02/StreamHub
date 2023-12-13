import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import categorySlice from "./categorySlice";
import chatSlice from "./chatSlice";
import channelIdSlice from "./channelIdSlice";

const store = configureStore({
    reducer: {
        app: appSlice,
        search: searchSlice,
        VideosCategory: categorySlice,
        chat: chatSlice,
        channelId:channelIdSlice,
    },
});

export default store;

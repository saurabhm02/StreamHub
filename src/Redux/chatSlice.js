import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name: "chat",
    initialState: {
      chatList: [],
    },
    reducers: {
      AddChatItem: (state, action) => {
        // Max Limit = 10
        state.chatList.unshift(action.payload);
        // Ensure the length of chatList does not exceed 10
        state.chatList = state.chatList.slice(0, 10);
      },
    },
  });
  
  export const { AddChatItem } = chatSlice.actions;
  export default chatSlice.reducer;
  
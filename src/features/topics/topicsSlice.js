import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  topics: {}
};

const topicsSlice = createSlice({
  name: "topics",
  initialState: initialState,
  reducers: {
    addTopic: (state, action) => {
      return (state.topics[action.payload.id] = action.payload);
    }
  }
});

export const selectTopics = (state) => {
  return state.topics;
};
export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;

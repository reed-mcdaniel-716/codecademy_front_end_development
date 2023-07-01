import { createSlice } from "@reduxjs/toolkit";

export const topicsSlice = createSlice({
  name: "topics",
  initialState: {
    topics: {}
  },
  reducers: {
    addTopic: (state, action) => {
      const newTopic = {
        id: action.payload.id,
        name: action.payload.name,
        icon: action.payload.icon,
        quizIds: []
      };
      state.topics[action.payload.id] = newTopic;
    },
    addQuiz: (state, action) => {
      console.log(
        "in topicsSlice addQuiz with action payload:",
        action.payload
      );
      state.topics[action.payload.topicId].quizIds.push(action.payload.id);
    }
  }
});

export const selectAllTopics = (state) => {
  console.log("state in selectAllTopics:", state);
  return state.topics.topics;
};

export const { addTopic, addQuiz } = topicsSlice.actions;
export default topicsSlice.reducer;

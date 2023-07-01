import { createSlice } from "@reduxjs/toolkit";
import { topicsSlice } from "../topics/topicsSlice.js";

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: {
    quizzes: {}
  },
  reducers: {
    addQuiz: (state, action) => {
      const newQuiz = {
        id: action.payload.id,
        name: action.payload.name,
        topicId: action.payload.topicId,
        cardIds: action.payload.cardIds
      };
      state.quizzes[action.payload.id] = newQuiz;
    }
  }
});

export const thunkAddQuiz = (payload) => {
  return (dispatch) => {
    dispatch(quizzesSlice.actions.addQuiz(payload));
    dispatch(topicsSlice.actions.addQuiz(payload));
  };
};

export const selectAllQuizzes = (state) => {
  console.log("state in selectAllQuizzes:", state);
  return state.quizzes.quizzes;
};

export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;

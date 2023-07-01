import { createSlice } from "@reduxjs/toolkit";

export const cardsSlice = createSlice({
  name: "cards",
  initialState: { cards: {} },
  reducers: {
    addCard: (state, action) => {
      const newCard = {
        id: action.payload.id,
        front: action.payload.front,
        back: action.payload.back
      };
      state.cards[action.payload.id] = newCard;
    }
  }
});

export const { addCard } = cardsSlice.actions;
export const selectAllCards = (state) => {
  return state.cards.cards;
};
export default cardsSlice.reducer;

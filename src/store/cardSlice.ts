import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Card {
  color: string,
  id: number
  opened: boolean,
  completed: boolean
}
interface State {
  colors: { color: string }[]
  card: Array<Card>
  opensCards: Card[],
  completed: Card[],
  score: number
}

const initialState: State = {
  colors: [
    { 'color': 'black' },
    { 'color': 'yellow' },
    { 'color': 'blue' },
    { 'color': 'orange' },
    { 'color': 'green' },
    { 'color': '#40E0D0' },
    { 'color': '#DE3163' },
    { 'color': '#800080' },
  ],
  card: [],
  opensCards: [],
  completed: [],
  score: 0
}

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    cardAdd: (state, action: PayloadAction<Card[]>) => {
      state.card = action.payload
    },
    flipCard: (state, action) => {
      const cardIndex = state.card.findIndex(
        card => card.id === action.payload.id

      )
      const openedIndex = state.opensCards.findIndex(
        card => card.id === action.payload.id
      )

      if (openedIndex === -1) {
        state.opensCards.push(state.card[cardIndex])
      }

      if (state.card[cardIndex].opened === false) {
        state.card[cardIndex].opened = true
      } else {
        state.card[cardIndex].opened = false
        state.opensCards = []
      }

    },
    check: (state) => {
      if (state.opensCards.length === 2) {
        const firsOpenCard = state.card.findIndex(
          (post) => post.id === state.opensCards[0].id
        );
        const secondOpenCard = state.card.findIndex(
          (post) => post.id === state.opensCards[1].id
        );
        if (state.opensCards[0].color === state.opensCards[1].color) {
          state.card[firsOpenCard].completed = true;
          state.card[secondOpenCard].completed = true;
          state.completed.push(state.card[firsOpenCard]);
          state.completed.push(state.card[secondOpenCard]);
          state.score += 50;
        } else {
          state.card[firsOpenCard].opened = false;
          state.card[secondOpenCard].opened = false;
          state.score -= 10;
        }
        state.opensCards = [];
      }
    },
    restart: (state) => {
      state.card = [];
      state.opensCards = [];
      state.completed = [];
      state.score = 0;
    },

  }
})

export const { cardAdd, flipCard, check, restart } = cardSlice.actions

export default cardSlice.reducer
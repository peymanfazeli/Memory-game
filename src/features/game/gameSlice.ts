import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type  { GameState } from "./types";
import { generateDeck } from "./utils";

const initialState: GameState = {
    deck:[],
    flippedCards: [],
    matchedPairs: [],
    movesCount: 0,
    time: 0,
    isBusy: false,
    gameStatus: 'idle',
};

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        startGame: (state, action: PayloadAction<{ pairsCount: number }>) => {
            const { pairsCount } = action.payload;
            state.deck = generateDeck(pairsCount);
            state.flippedCards = [];
            state.matchedPairs = [];
            state.movesCount = 0;
            state.time = 0;
            state.isBusy = false;
            state.gameStatus = 'playing';
        },
    },
})

export const { startGame } = gameSlice.actions;
export default gameSlice.reducer;
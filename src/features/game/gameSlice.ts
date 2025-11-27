import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { GameState, CardType } from "./types";
import type { RootState } from "../../store";
import { generateDeck } from "./utils";

/* ------------------------------------------
   Initial State
------------------------------------------- */

const initialState: GameState = {
    deck: [],
    flippedCards: [],
    matchedPairs: [],
    movesCount: 0,
    time: 0,
    isBusy: false,
    gameStatus: "idle",
};

/* ------------------------------------------
   Thunk: flipCard (logic-heavy)
------------------------------------------- */

export const flipCard = createAsyncThunk(
    "game/flipCard",
    async (
        payload: { id: string; pairId: string },
        { dispatch, getState }
    ) => {
        const state = getState() as RootState;

        const { id, pairId } = payload;

        // 1. جلوگیری از کلیک‌های همزمان
        if (state.game.isBusy) return;

        // 2. پیدا کردن کارت
        const card = state.game.deck.find((c: CardType) => c.id === id);
        if (!card) return;

        // اگر کارت قبلاً باز شده یا match شده باشد
        if (card.isFlipped || card.isMatched) return;

        // 3. کارت را برگردانیم
        dispatch(gameSlice.actions.flip(id));
        dispatch(
            gameSlice.actions.addFlipped({
                id,
                pairId,
            })
        );

        const { flippedCards } = (getState() as RootState).game;

        // اگر فقط یک کارت flipped شده، منتظر کارت دوم بمانیم
        if (flippedCards.length === 1) return;

        // 4. جلوگیری از کلیک‌های اضافه
        dispatch(gameSlice.actions.setBusy(true));

        // 5. صبر برای انیمیشن flip UI
        await new Promise((r) => setTimeout(r, 800));

        const { flippedCards: cards } = (getState() as RootState).game;
        const [first, second] = cards;

        // 6. Match Logic
        if (first.pairId === second.pairId) {
            dispatch(
                gameSlice.actions.setMatched([first.id, second.id])
            );
        } else {
            dispatch(
                gameSlice.actions.unflip([first.id, second.id])
            );
        }

        // 7. پاک کردن کارت‌های flipped
        dispatch(gameSlice.actions.clearFlipped());

        // 8. آزاد کردن کلیک‌ها
        dispatch(gameSlice.actions.setBusy(false));
    }
);

/* ------------------------------------------
   Slice Definition
------------------------------------------- */

const gameSlice = createSlice({
    name: "game",
    initialState,
    reducers: {
        /* Start Game */
        startGame: (
            state,
            action: PayloadAction<{ pairsCount: number }>
        ) => {
            const { pairsCount } = action.payload;

            const newDeck = generateDeck(pairsCount);
            state.deck = newDeck;
            console.log('generateDeck is called ', newDeck)
            state.flippedCards = [];
            state.matchedPairs = [];
            state.movesCount = 0;
            state.time = 0;
            state.isBusy = false;
            state.gameStatus = "playing";
        },

        /* Flip a card */
        flip: (state, action: PayloadAction<string>) => {
            console.log('flip is called ', action.payload)
            console.log('deck is', JSON.parse(JSON.stringify(state.deck)))
            const card = state.deck.find((c) => c.id === action.payload);
            if (card) {
                card.isFlipped = true;
            }
        },

        /* Unflip array of card ids */
        unflip: (state, action: PayloadAction<string[]>) => {
            action.payload.forEach((id) => {
                const card = state.deck.find((c) => c.id === id);
                if (card) card.isFlipped = false;
            });
        },

        /* Mark cards as matched */
        setMatched: (state, action: PayloadAction<string[]>) => {
            action.payload.forEach((id) => {
                const card = state.deck.find((c) => c.id === id);
                if (card) {
                    card.isMatched = true;
                    card.isFlipped = true;
                }
            });
        },

        /* Push a card to flippedCards */
        addFlipped: (
            state,
            action: PayloadAction<{ id: string; pairId: string }>
        ) => {
            const card = state.deck.find((c) => c.id === action.payload.id);
            if (card) state.flippedCards.push(card);
        },

        /* Clear flippedCards array */
        clearFlipped: (state) => {
            state.flippedCards = [];
        },

        /* Set isBusy lock */
        setBusy: (state, action: PayloadAction<boolean>) => {
            state.isBusy = action.payload;
        },
    },

    extraReducers: (builder) => {
        // فقط برای کامل شدن چرخه thunk لازم است
        builder.addCase(flipCard.fulfilled, () => {});
    },
});

/* ------------------------------------------
   Exports
------------------------------------------- */

export const {
    startGame,
    flip,
    unflip,
    setMatched,
    addFlipped,
    clearFlipped,
    setBusy,
} = gameSlice.actions;

export default gameSlice.reducer;

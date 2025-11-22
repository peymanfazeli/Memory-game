import { configureStore } from '@reduxjs/toolkit'
import gameReducer from '../features/game/gameSlice'
export const store = configureStore({
    reducer: {
        game: gameReducer, // This manages your game state (gameReducer is a reducer function that manages the game state)
    },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
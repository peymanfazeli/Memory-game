import { useAppDispatch, useAppSelector } from '../hooks/index'
import { startGame } from '../features/game/gameSlice'

export default function Controls() {
  // useAppDispatch is a hook that allows us to dispatch actions to the store
  const dispatch = useAppDispatch();
  // useAppSelector is a hook that allows us to access the state from the store; Component re-renders automatically when deck changes!
  const deck = useAppSelector((state) => state.game.deck);
  return (
    <div>
      <h1>Controls</h1>
      <button onClick={() => dispatch(startGame({ pairsCount: 6 }))}>Start Game</button>
      <div>
        <p>Deck length: {deck.length}</p>
      </div>
    </div>
  )
}
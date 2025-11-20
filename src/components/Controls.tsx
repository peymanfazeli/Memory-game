import { useAppDispatch, useAppSelector } from '../hooks/index'
import { startGame } from '../features/game/gameSlice'

export default function Controls() {
  const dispatch = useAppDispatch();
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
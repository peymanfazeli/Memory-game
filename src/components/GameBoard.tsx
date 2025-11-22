import { useAppSelector } from '../hooks'
import Card from './Card'
export default function GameBoard() {
	// useAppSelector is a hook that allows us to access the state from the store
	const deck = useAppSelector((state) => state.game.deck);
	return (
		<div className='grid grid-cols-2 sm:grid-cols-4 gap-4 p-4'>
			{deck.map((card) => (
				<Card 
					key={card.id}
					card={card}
					// onClick={(id, pairId) => dispatch(flipCard({ id, pairId }))}
					onClick={(id, pairId) => console.log('id is', id, 'pairId is', pairId)}
				/>
			))}
		</div>
	)
}
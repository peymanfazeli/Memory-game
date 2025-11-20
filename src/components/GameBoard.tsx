import { useAppSelector } from '../hooks'
import Card from './Card'
export default function GameBoard() {
	const deck = useAppSelector((state) => state.game.deck);
	return (
		<div className='grid grid-cols-2 sm:grid-cols-4 gap-4 p-4'>
			{deck.map((card) => (
				<Card key={card.id} card={card} />
			))}
		</div>
	)
}
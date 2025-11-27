import { flipCard, unflip } from '../features/game/gameSlice';
import { useAppDispatch, useAppSelector } from '../hooks'
import type { CardType } from '../features/game/types';
import Card from './Card'
export default function GameBoard() {
	// useAppSelector is a hook that allows us to access the state from the store
	const deck = useAppSelector((state) => state.game.deck);
	const dispatch = useAppDispatch();
	
	const handleClick = (card: CardType) => {
		console.log('handle click in game board', card)
        // اگر کارت قبلاً برگشته یا match شده باشد، کلیک غیر فعال است
        // if (card.isFlipped || card.isMatched) return;
		if (card.isFlipped) {
			dispatch(unflip([card.id]));
		}
		if (card.isMatched) {
			console.log('card is matched', card)
		} else {
        dispatch(
          flipCard({
            id: card.id,
            pairId: card.pairId,
          })
        );
      }
    };
	return (
		<div className='grid grid-cols-2 sm:grid-cols-4 gap-4 p-4'>
			{deck.map((card) => (
				<Card 
					key={card.id}
					card={card}
					onClick={() => handleClick(card)}
				/>
			))}
		</div>
	)
}
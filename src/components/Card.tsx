import type { CardType } from '../features/game/types'

interface CardProps {
  card: CardType;
}
export default function Card({ card }: CardProps) {
	return (
		<div className="w-16 h-20 bg-gray-200 rounded flex items-center justify-center text-2xl">
			{card.face}
		</div>
	)
}
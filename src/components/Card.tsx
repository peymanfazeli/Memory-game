import type { CardType } from '../features/game/types'

import { playCardFlipSound } from '../utils/playCardFlipSound';
// assets
import backFace from '../assets/card-back2.svg';
import cardFlipSound from '../assets/sounds/flipSound.mp3';

interface CardProps {
  card: CardType;
  onClick: (id: string, pairId: string) => void;
}
export default function Card({ card, onClick }: CardProps) {
	const { id, pairId, face, isFlipped, isMatched } = card;
	const Click = () => {
		if (!isMatched) {
			playCardFlipSound(cardFlipSound);
			onClick(id, pairId);
		}
	}
	return (
		// <div className="w-16 h-20 bg-gray-200 rounded flex items-center justify-center text-2xl">
		<div
			className="w-24 h-28 perspective"
			onClick={() => Click()}
		>
			<div
				className={`relative w-full h-full duration-500 transform-style-preserve-3d ${
					isFlipped ? "rotate-y-180" : ""
				}`}
			>
			
				{/* Front Face */}
				<div className="absolute inset-0 bg-white rounded-xl shadow-xl flex items-center justify-center text-4xl backface-hidden">
					{face}
				</div>
				{/* Back Face */}
				<div className="absolute inset-0 rounded-xl shadow-xl backface-hidden rotate-y-180">
					<img
						src={backFace}
						className="w-full h-full object-cover rounded-xl"
						alt="card-back"
					/>
				</div>
			</div>
		</div>
	)
}

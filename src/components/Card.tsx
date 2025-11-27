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
		if (!isMatched && !isFlipped) {
			playCardFlipSound(cardFlipSound);
			onClick(id, pairId);
		}
		if (isMatched) {
			console.log('okkkkkkk')
		}
		// console.log('clicked', card)
	}
	return (
		<div
			className="w-24 h-28 perspective"
			onClick={Click}
		>
			<div
				className={`relative w-full h-full duration-500 transform-style-preserve-3d ${
					isFlipped ? "rotate-y-180" : ""
				}`}
			>
				{/* Front Face - shows when card is NOT flipped (back of card) */}
				<div className="absolute inset-0 rounded-xl shadow-xl backface-hidden">
					<img
						src={backFace}
						className="w-full h-full object-cover rounded-xl"
						alt="card-back"
					/>
				</div>
				{/* Back Face - shows when card IS flipped (front of card with face value) */}
				<div className="absolute inset-0 rounded-xl shadow-xl backface-hidden rotate-y-180">
					<div className="w-full h-full bg-white rounded-xl flex items-center justify-center text-4xl">
						{face}
					</div>
				</div>
			</div>
		</div>
	)
}

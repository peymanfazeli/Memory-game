import { shuffle } from "../../utils/shuffle";
import type { CardType } from "./types";


export const faces = [
	'🐶',
	'🐱',
	'🦊',
	'🐻',
	'🐼',
	'🐸',
	'🐵',
	'🦁',
	'🐷',
	'🐰',
	'🐯',
	'🐮',
	'🐔',
	'🐙',
	'🐢',
	'🐞',
	'🦋',
	'🐝',
	'🐠',
	'🐳'
]

export const generateDeck = (pairsCount: number): CardType[] => {
	const selectedFaces = faces.slice(0, pairsCount); // choose number of pairs
	const cards: CardType[] =selectedFaces.flatMap((face, index) => {
		return [
			{
				id: `${index}-a`,
				pairId: `${index}`,
				face,
				isFlipped: false,
				isMatched: false
			},
			{
				id: `${index}-b`,
				pairId: `${index}`,
				face,
				isFlipped: false,
				isMatched: false
			}
		]
	}) // create cards for each face

	// return cards;
	return shuffle(cards);
}
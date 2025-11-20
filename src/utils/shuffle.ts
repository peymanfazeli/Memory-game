import type { CardType } from "../features/game/types";

export const shuffle = (cards: CardType[]): CardType[] => {
    return cards.sort(() => Math.random() - 0.5);
}
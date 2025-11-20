export interface CardType {
    id: string;
    pairId: string;
    face: string;
    isFlipped: boolean;
    isMatched: boolean;
};

export interface GameState {
    deck: CardType[];
    flippedCards: CardType[];
    matchedPairs: CardType[];
    movesCount: number;
    time: number;
    isBusy: boolean;
    gameStatus: 'idle' | 'playing' | 'won' | 'lost';
}


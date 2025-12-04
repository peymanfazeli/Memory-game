# Memory Match Game (React + Redux Toolkit)

## Overview

This project is a **Memory Match Game** built with modern front‑end
technologies. It demonstrates clean state management, component
architecture, animations, and scalable patterns that are commonly used
in professional React applications.

The goal of the game is simple: Players flip two cards at a time to find
matching pairs. When all pairs are matched, the game ends.

------------------------------------------------------------------------

## Features

-   Dynamic deck generation based on selected pair count\
-   Real-time game state management via Redux Toolkit\
-   Flip logic with busy-lock to prevent multi‑click issues\
-   Match detection + automatic update of matched cards\
-   Animated flip cards (expandable component)\
-   Grid-based responsive UI\
-   Centralized state for:
    -   Deck
    -   Flipped cards
    -   Matched pairs
    -   Move counter
    -   Timer
    -   Busy lock (`isBusy`)
    -   Game status (`idle | playing | won | lost`)

------------------------------------------------------------------------

## Tech Stack

### Frontend

-   **React 18 (functional components)**
-   **TypeScript**
-   **TailwindCSS** for layout & UI styling
-   **SVG assets** for customizable card design

### State Management

-   **Redux Toolkit (RTK)**
    -   `createSlice`
    -   Typed reducers and actions
    -   Predictable immutable updates
-   **react-redux hooks**
    -   `useAppDispatch`
    -   `useAppSelector`

### Utilities

-   Custom deck generator
-   Strongly typed game models (`CardType`, `GameState`)

------------------------------------------------------------------------

## Project Structure

    src/
     ├── components/
     │    └── Card.tsx
     ├── features/
     │    └── game/
     │         ├── gameSlice.ts
     │         ├── types.ts
     │         ├── utils.ts
     ├── hooks/
     │    ├── useAppDispatch.ts
     │    └── useAppSelector.ts
     ├── store/
     │    └── index.ts
     ├── pages/
     │    └── GameBoard.tsx

------------------------------------------------------------------------

## Game Flow

1.  **startGame(pairsCount)**
    -   Generates deck using `generateDeck(pairsCount)`
    -   Resets counters, timer, and status\
    -   Enters `playing` mode
2.  **flipCard({ id, pairId })**
    -   Flips a card
    -   If two cards are flipped → lock board using `isBusy`
    -   If they match → mark as matched\
    -   If not → auto flip-back after delay
3.  **Game End**
    -   When all pairIds are matched, status becomes `won`

------------------------------------------------------------------------

## Why Redux Toolkit?

Redux Toolkit provides: - Cleaner slice-based architecture\
- Strong typing with TypeScript\
- Immutable updates without boilerplate\
- Simpler integration into React components\
- Highly maintainable logic for a game where timing and state
transitions matter

------------------------------------------------------------------------

## Future Enhancements

-   3D flip animation with CSS perspective\
-   Sound effects for flip & match\
-   Difficulty modes\
-   Timer display & score system\
-   Local leaderboard or backend sync\
-   Card themes & customizable packs

------------------------------------------------------------------------

## Purpose

This project is ideal for: - Developers learning **Redux Toolkit** in a
practical scenario\
- React beginners aiming to practice **stateful UI patterns**\
- Anyone interested in front‑end architecture and game UI logic\
- Portfolio-quality demonstration of React + TypeScript proficiency

------------------------------------------------------------------------

## License

MIT License. Free to use, modify, and expand.

import React, { useState, useEffect } from 'react';

function MemoryGameApp() {
  const [cards, setCards] = useState([]);
  const [flippedIndexes, setFlippedIndexes] = useState([]);
  const [matchedIndexes, setMatchedIndexes] = useState([]);
  const [moves, setMoves] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const cardValues = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

  // Shuffle cards and create a deck
  const shuffleCards = () => {
    const deck = [...cardValues, ...cardValues];
    console.log('1111', deck);
    const shuffledDeck = deck
      .map((card) => ({ value: card, id: Math.random() }))
      .sort(() => Math.random() - 0.5);

      console.log('shuffledDeck', shuffledDeck);
    setCards(shuffledDeck);
    setFlippedIndexes([]);
    setMatchedIndexes([]);
    setMoves(0);
    setGameOver(false);
  };

  // Flip a card
  const flipCard = (index) => {
    if (flippedIndexes.length === 2 || flippedIndexes.includes(index) || matchedIndexes.includes(index)) {
      return;
    }
    const newFlippedIndexes = [...flippedIndexes, index];
    setFlippedIndexes(newFlippedIndexes);

    // Check for match when two cards are flipped
    if (newFlippedIndexes.length === 2) {
      setMoves(moves + 1);

      const [firstIndex, secondIndex] = newFlippedIndexes;
      if (cards[firstIndex].value === cards[secondIndex].value) {
        setMatchedIndexes((prev) => [...prev, firstIndex, secondIndex]);
      }

      // Reset flipped cards after 1 second if no match
      setTimeout(() => {
        setFlippedIndexes([]);
      }, 1000);
    }
  };

  // Check if game is over
  useEffect(() => {
    if (matchedIndexes.length === cards.length) {
      setGameOver(true);
    }
  }, [matchedIndexes, cards.length]);

  // Start a new game
  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className="game-container">
      <h1>Memory Game</h1>
      {gameOver && <div className="game-over">You Won! Total Moves: {moves}</div>}
      <div className="card-grid">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`card ${flippedIndexes.includes(index) || matchedIndexes.includes(index) ? 'flipped' : ''}`}
            onClick={() => flipCard(index)}
          >
            {flippedIndexes.includes(index) || matchedIndexes.includes(index) ? card.value : '?'}
          </div>
        ))}
      </div>
      <button onClick={shuffleCards}>Restart Game</button>
      <div>Moves: {moves}</div>
    </div>
  );
}

export default MemoryGameApp;

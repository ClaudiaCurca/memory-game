"use client"

import { useEffect,useState } from "react";
import Image from "next/image";

type MemoryCard ={
    id:number;
    value: string;
    isFlipped: boolean;
    isMatched:boolean;
};

type Difficulty = "easy" | "medium"| "hard";

type GameBoardProps = {
  difficulty: Difficulty;
};


const difficultyPairs: Record<Difficulty, number> = {
  easy: 4,
  medium: 8,
  hard: 12,
};

const cardValues = [
    "/animals/cat.png",
    "/animals/dog.png",
    "/animals/frog.png",
    "/animals/hamster.png",
    "/animals/hedgehogs.png",
    "/animals/cat1.png",
    "/animals/rabbit.png",
    "/animals/racoon.png",
    "/animals/penguin.png",
    "/animals/kingJulien.png",
    "/animals/horse.png",
    "/animals/ram.png",
];

function createDeck(difficulty:Difficulty):MemoryCard[]
{
  const numberOfPairs = difficultyPairs[difficulty];

  const selectedValues = cardValues.slice(0,numberOfPairs);

  const duplicateValues = [...selectedValues,...selectedValues];

    return duplicateValues
        .sort(()=>Math.random() -0.5)
        .map((value,index)=>({
            id:index,
            value,
            isFlipped: false,
            isMatched: false,
        })
    );
}
export default function GameBoard({
    difficulty,
}:GameBoardProps){

    const [cards,setCards] = useState<MemoryCard[]>([]);
    const [firstCardId, setFirstCardId] = useState<number | null>(null);
    const [secondCardId, setSecondCardId] = useState<number | null>(null);
    const [moves, setMoves] = useState(0);
    const [isChecking, setIsChecking] = useState(false);

    useEffect(() => {
        setCards(createDeck(difficulty));
    }, [difficulty]);

  function handleCardClick(cardId: number) 
  {

        if (isChecking) return;

        const clickedCard = cards.find((card) => card.id === cardId);

        if (!clickedCard || clickedCard.isFlipped || clickedCard.isMatched) 
            {
                return;
            }

        setCards((currentCards) =>
            currentCards.map((card) =>
                card.id === cardId ? { ...card, isFlipped: true } : card
            )
            );

        if (firstCardId === null) {
            setFirstCardId(cardId);
        }
        else{
            setSecondCardId(cardId);
            setMoves((currentMoves) => currentMoves + 1);
            setIsChecking(true);
        }

      
  }

  useEffect(() => {
    if (firstCardId === null || secondCardId === null) return;

    const firstCard = cards.find((card) => card.id === firstCardId);
    const secondCard = cards.find((card) => card.id === secondCardId);

    if (!firstCard || !secondCard) return;

    if (firstCard.value === secondCard.value) {
      setCards((currentCards) =>
        currentCards.map((card) =>
          card.id === firstCardId || card.id === secondCardId
            ? { ...card, isMatched: true }
            : card
        )
      );

      resetSelectedCards();
      return;
    }

    const timeout = window.setTimeout(() => {
      setCards((currentCards) =>
        currentCards.map((card) =>
          card.id === firstCardId || card.id === secondCardId
            ? { ...card, isFlipped: false }
            : card
        )
      );

      resetSelectedCards();
    }, 1000);

    return () => window.clearTimeout(timeout);
  }, [firstCardId, secondCardId, cards]);

  function resetSelectedCards() {
    setFirstCardId(null);
    setSecondCardId(null);
    setIsChecking(false);
  }

  function restartGame() {
    setCards(createDeck(difficulty));
    setFirstCardId(null);
    setSecondCardId(null);
    setMoves(0);
    setIsChecking(false);
  }

  const isGameFinished =
    cards.length > 0 && cards.every((card) => card.isMatched);

        const gridClasses: Record<Difficulty,string>={
        easy:"grid-cols-4",
        medium:"grid-cols-4",
        hard:"grid-cols-4 md:grid-cols-6",
        };

  return (
    <section className="w-full max-w-2xl px-6 py-10">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-black">Memory Game</h1>
          <p className="mt-2 text-gray-600">Moves: {moves}</p>
          <p className="mt-2 capitalize text-gray-600">
            Difficulty: {difficulty}
          </p>
        </div>

        <button
          type="button"
          onClick={restartGame}
          className="rounded-lg bg-black px-5 py-3 text-white"
        >
          Restart
        </button>
      </div>

      {isGameFinished && (
        <p className="mb-6 rounded-lg bg-green-100 p-4 text-center font-semibold text-green-800">
          Congratulations! You finished the game in {moves} moves.
        </p>
      )}



      <div className={`grid gap-4 ${gridClasses[difficulty]}`}>
        {cards.map((card) => {
          const isVisible = card.isFlipped || card.isMatched;

          return (
            <button
              key={card.id}
              type="button"
              onClick={() => handleCardClick(card.id)}
              disabled={card.isMatched || isChecking}
              className="flex aspect-square items-center justify-center overflow-hidden rounded-xl bg-slate-900 shadow-md transition hover:scale-105 disabled:cursor-default disabled:hover:scale-100"
            >
             {isVisible ? (
                <div className ="flex h-full items-center justify-center p-4">
                <Image
                    src={card.value}
                    alt="Memory card"
                    width={110}
                    height={110}
                    className="h-full w-full object-contain"
                />
                </div>
                ) : (
                  <span className="text-3xl text-white">?</span>
                )}
            </button>
          );
        })}
      </div>
    </section>
  );
}
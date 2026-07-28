"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Difficulty = "easy" | "medium" | "hard";


export default function Home() {

    const [selectedDifficulty, setSelectedDifficulty] =
    useState<Difficulty>("medium");

  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-white">
      <section className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center">
          <Image
            src="/preview.jpg"
            alt="Memory Game preview"
            width={600}
            height={600}
            className="w-full max-w-md rounded-2xl object-cover"
            priority
          />
        </div>

        <div className="flex flex-col items-start gap-6">
          <h1 className="text-4xl md:text-6xl font-bold text-black">
            Test your memory
          </h1>


           <p className="mb-6 text-gray-600">
            Choose a difficulty level before starting the game.
          </p>

          <div className="mb-8 flex gap-3">
            <button
              type="button"
              onClick={() => setSelectedDifficulty("easy")}
              className={`rounded-lg border-2 px-5 py-2 font-semibold transition ${
                selectedDifficulty === "easy"
                  ? "border-black bg-black text-white"
                  : "border-gray-300 bg-white text-black hover:border-black"
              }`}
            >
              Easy
            </button>
            <button
              type="button"
              onClick={() => setSelectedDifficulty("medium")}
              className={`rounded-lg border-2 px-5 py-2 font-semibold transition ${
                selectedDifficulty === "medium"
                  ? "border-black bg-black text-white"
                  : "border-gray-300 bg-white text-black hover:border-black"
              }`}
            >
              Medium
            </button>

            <button
              type="button"
              onClick={() => setSelectedDifficulty("hard")}
              className={`rounded-lg border-2 px-5 py-2 font-semibold transition ${
                selectedDifficulty === "hard"
                  ? "border-black bg-black text-white"
                  : "border-gray-300 bg-white text-black hover:border-black"
              }`}
            >
              Hard
            </button>
            </div>

          <Link
          href = "/game">
            <button className="rounded-xl bg-black px-8 py-4 text-white">
              Start
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
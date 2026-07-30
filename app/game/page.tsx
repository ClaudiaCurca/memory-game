import GameBoard from "@/components/GameBoard";

type Difficulty = "easy" | "medium" | "hard";

type GamePageProps = {
  searchParams: Promise<{
    difficulty?: string;
  }>;
};

export default async function GamePage({
  searchParams,
}: GamePageProps) {
  const params = await searchParams;

  const difficulty: Difficulty =
    params.difficulty === "easy" ||
    params.difficulty === "medium" ||
    params.difficulty === "hard"
      ? params.difficulty
      : "medium";

  return (
    <main className="flex min-h-screen justify-center bg-white">
      <GameBoard difficulty={difficulty} />
    </main>
  );
}
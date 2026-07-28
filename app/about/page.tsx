export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
    <section className="mx-auto max-w-4xl px-6 py-16 ">
      <h1 className="mb-6 text-4xl font-bold text-black ">
        About the Game
      </h1>

      <p className="text-lg leading-8 text-gray-700">
        Memory Game is a card matching application built with Next.js,
        TypeScript, and Tailwind CSS. The objective is to find all matching
        pairs using as few moves as possible.
      </p>
    </section>
    </main>
  );
}
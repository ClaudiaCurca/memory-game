import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
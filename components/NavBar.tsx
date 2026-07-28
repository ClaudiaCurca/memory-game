import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-xl font-bold text-black"
        >
          Memory Game
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="text-gray-700 transition hover:text-black"
          >
            Home
          </Link>

          <Link
            href="/game"
            className="text-gray-700 transition hover:text-black"
          >
            Game
          </Link>

          <Link
            href="/about"
            className="text-gray-700 transition hover:text-black"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
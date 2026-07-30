"use client";

import Link from "next/link";
import { useUser, UserButton, SignInButton } from "@clerk/nextjs";

export default function Navbar() {
  const { isSignedIn } = useUser();
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

          {isSignedIn ? (
            <UserButton />
          ) : (
            <SignInButton mode="modal">
              <button className="rounded bg-black px-4 py-2 text-white">
                Sign In
              </button>
            </SignInButton>
          )}
        </div>
      </div>
    </nav>
  );
}
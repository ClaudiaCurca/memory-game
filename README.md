# Memory Game

## Description

Memory Game is a web application built with Next.js where players test their memory by matching pairs of cards. The objective is to find all matching pairs using as few moves as possible and in the shortest amount of time.

The project is developed as part of a practical training assignment and follows a real-world development workflow, including version control, deployment, and incremental feature implementation.

---

## Features

Current:
- Landing page
- Responsive layout
- Memory card game
- Multiple difficulty levels
- Move counter
- Restart game

Planned:

- Random card shuffle
- Timer
- Score calculation
- Leaderboard
- Database integration for storing scores

---

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Git & GitHub
- Vercel
- Clerk Authentication

Planned:
- Neon (PostgreSQL Database)
- Prisma ORM

---

## Project Structure

```text
├── app/
├── components/
|── public/
├── proxy.ts
├── package.json
└── README.md
```
## Environment Variables

Create a `.env.local` file and add:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
CLERK_SECRET_KEY=your_secret_key
```

## Getting Started

Clone the repository:

```bash
git clone https://github.com/ClaudiaCurca/memory-game.git
```

Navigate to the project directory:

```bash
cd memory-game
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the application in your browser:

```text
http://localhost:3000
```

---

## Roadmap

- [x] Initialize Next.js project
- [x] Create GitHub repository
- [x] Create landing page
- [x] Implement game board
- [x] Add card matching logic
- [x] Add difficulty levels
- [x] Integrate Clerk authentication
- [ ] Add timer and move counter
- [ ] Implement score calculation
- [ ] Save scores to the database
- [ ] Create leaderboard
- [x] Deploy the application on Vercel

---

## Deployment

The application is deployed on Vercel.

**Live Demo:** https://memory-game-gray-six.vercel.app/

---

## Author

Claudia
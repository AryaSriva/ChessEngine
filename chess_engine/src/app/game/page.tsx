import { ChessGame } from "@/components/chess/ChessGame";

export default function GamePage() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="mb-6 text-3xl font-bold">AI Chess Coach</h1>
      <ChessGame />
    </main>
  );
}
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background px-6 py-12">
      <section className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <div className="mb-6 rounded-full border px-4 py-1 text-sm text-muted-foreground">
          AI-powered chess training
        </div>

        <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
          Improve your chess with an AI coach that explains your mistakes.
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Play games, review your moves, get Stockfish-backed analysis, and turn your blunders into personalized lessons.
        </p>

        <div className="mt-8 flex gap-4">
          <Button asChild size="lg">
            <Link href="/game">Start Game</Link>
          </Button>

          <Button asChild variant="outline" size="lg">
            <Link href="/dashboard">View Dashboard</Link>
          </Button>
        </div>
      </section>

      <section className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Play</CardTitle>
            <CardDescription>
              Play against an adjustable chess engine.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Start with a simple Stockfish-powered opponent and eventually add adaptive difficulty.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Analyze</CardTitle>
            <CardDescription>
              Review every game with engine-backed insight.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Store PGNs, evaluate positions, identify mistakes, and classify blunders.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Learn</CardTitle>
            <CardDescription>
              Turn analysis into coaching.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Use OpenAI to explain why moves were good or bad in plain English.
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
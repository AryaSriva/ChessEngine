"use client";

import { useState } from "react";
import { Chess, Square } from "chess.js";
import { Chessboard } from "react-chessboard";

export function ChessGame() {
  const [game, setGame] = useState(new Chess());

  function makeMove(sourceSquare: Square, targetSquare: Square) {
    const gameCopy = new Chess(game.fen());

    const move = gameCopy.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q",
    });

    if (move === null) return false;

    setGame(gameCopy);
    return true;
  }

  return (
    <div className="mx-auto w-full max-w-[600px]">
      <Chessboard
        options={{
          position: game.fen(),
          onPieceDrop: ({ sourceSquare, targetSquare }) => {
            if (!targetSquare) return false;
            return makeMove(sourceSquare as Square, targetSquare as Square);
          },
        }}
      />

      <div className="mt-4 rounded-lg border p-4 text-sm">
        <p>
          <strong>FEN:</strong> {game.fen()}
        </p>
        <p className="mt-2">
          <strong>PGN:</strong> {game.pgn() || "No moves yet"}
        </p>
      </div>
    </div>
  );
}
import { useState, useCallback } from 'react';
import type { GameState, Player, Board } from '@/types';
import { checkWinner, checkDraw, createEmptyBoard } from '@/lib/gameLogic';

const initialState: GameState = {
  board: createEmptyBoard(),
  currentPlayer: 'X',
  status: 'playing',
  winner: null,
  winningLine: null,
  scores: { X: 0, O: 0, draws: 0 },
};

export function useGame() {
  const [state, setState] = useState<GameState>(initialState);

  const makeMove = useCallback((index: number) => {
    setState((prev) => {
      if (prev.status !== 'playing') return prev;
      if (prev.board[index] !== null) return prev;

      const newBoard: Board = [...prev.board];
      newBoard[index] = prev.currentPlayer;

      const result = checkWinner(newBoard);
      if (result) {
        return {
          ...prev,
          board: newBoard,
          status: 'won',
          winner: result.winner,
          winningLine: result.line,
          scores: {
            ...prev.scores,
            [result.winner]: prev.scores[result.winner] + 1,
          },
        };
      }

      if (checkDraw(newBoard)) {
        return {
          ...prev,
          board: newBoard,
          status: 'draw',
          winner: null,
          winningLine: null,
          scores: {
            ...prev.scores,
            draws: prev.scores.draws + 1,
          },
        };
      }

      const nextPlayer: Player = prev.currentPlayer === 'X' ? 'O' : 'X';
      return {
        ...prev,
        board: newBoard,
        currentPlayer: nextPlayer,
      };
    });
  }, []);

  const resetGame = useCallback(() => {
    setState((prev) => ({
      ...prev,
      board: createEmptyBoard(),
      currentPlayer: 'X',
      status: 'playing',
      winner: null,
      winningLine: null,
    }));
  }, []);

  const resetAll = useCallback(() => {
    setState(initialState);
  }, []);

  return { state, makeMove, resetGame, resetAll };
}

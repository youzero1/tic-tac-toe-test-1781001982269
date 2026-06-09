import { useGame } from '@/hooks/useGame';
import Board from '@/components/Board';
import ScoreBoard from '@/components/ScoreBoard';
import StatusBanner from '@/components/StatusBanner';
import { RotateCcw, Trophy } from 'lucide-react';

export default function GamePage() {
  const { state, makeMove, resetGame, resetAll } = useGame();

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-950 via-purple-900 to-indigo-950 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8 fade-in">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Trophy className="text-yellow-400" size={32} />
            <h1 className="text-4xl font-extrabold text-white tracking-tight">Tic Tac Toe</h1>
            <Trophy className="text-yellow-400" size={32} />
          </div>
          <p className="text-purple-300 text-sm">Classic 2-player game</p>
        </div>

        {/* Score Board */}
        <ScoreBoard scores={state.scores} />

        {/* Status Banner */}
        <StatusBanner
          status={state.status}
          winner={state.winner}
          currentPlayer={state.currentPlayer}
        />

        {/* Game Board */}
        <Board
          board={state.board}
          winningLine={state.winningLine}
          onCellClick={makeMove}
          gameOver={state.status !== 'playing'}
        />

        {/* Buttons */}
        <div className="flex gap-3 mt-6">
          <button
            onClick={resetGame}
            className="flex-1 flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-violet-500/30"
          >
            <RotateCcw size={18} />
            New Game
          </button>
          <button
            onClick={resetAll}
            className="flex-1 flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 border border-white/20"
          >
            Reset Scores
          </button>
        </div>
      </div>
    </div>
  );
}

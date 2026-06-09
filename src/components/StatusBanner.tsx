import clsx from 'clsx';
import type { GameStatus, Player } from '@/types';

type StatusBannerProps = {
  status: GameStatus;
  winner: Player | null;
  currentPlayer: Player;
};

export default function StatusBanner({ status, winner, currentPlayer }: StatusBannerProps) {
  let message = '';
  let colorClass = '';

  if (status === 'won' && winner) {
    message = `Player ${winner} wins! 🎉`;
    colorClass = winner === 'X' ? 'bg-pink-500/20 border-pink-500/40 text-pink-300' : 'bg-blue-500/20 border-blue-500/40 text-blue-300';
  } else if (status === 'draw') {
    message = "It's a draw! 🤝";
    colorClass = 'bg-yellow-500/20 border-yellow-500/40 text-yellow-300';
  } else {
    message = `Player ${currentPlayer}'s turn`;
    colorClass = currentPlayer === 'X'
      ? 'bg-pink-500/10 border-pink-500/20 text-pink-200'
      : 'bg-blue-500/10 border-blue-500/20 text-blue-200';
  }

  return (
    <div
      className={clsx(
        'text-center py-3 px-4 rounded-xl border mb-4 font-semibold text-base transition-all duration-300 fade-in',
        colorClass
      )}
    >
      {message}
    </div>
  );
}

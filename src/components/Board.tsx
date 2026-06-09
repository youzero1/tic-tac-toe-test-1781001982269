import clsx from 'clsx';
import type { Board as BoardType } from '@/types';
import Cell from '@/components/Cell';

type BoardProps = {
  board: BoardType;
  winningLine: number[] | null;
  onCellClick: (index: number) => void;
  gameOver: boolean;
};

export default function Board({ board, winningLine, onCellClick, gameOver }: BoardProps) {
  return (
    <div
      className={clsx(
        'grid grid-cols-3 gap-3 p-4 bg-white/5 rounded-2xl border border-white/10 shadow-2xl',
        gameOver && 'opacity-95'
      )}
    >
      {board.map((cell, index) => (
        <Cell
          key={index}
          value={cell}
          isWinning={winningLine ? winningLine.includes(index) : false}
          onClick={() => onCellClick(index)}
          disabled={gameOver || cell !== null}
        />
      ))}
    </div>
  );
}

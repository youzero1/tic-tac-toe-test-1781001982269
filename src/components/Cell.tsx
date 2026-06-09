import clsx from 'clsx';
import type { CellValue } from '@/types';

type CellProps = {
  value: CellValue;
  isWinning: boolean;
  onClick: () => void;
  disabled: boolean;
};

export default function Cell({ value, isWinning, onClick, disabled }: CellProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        'aspect-square flex items-center justify-center rounded-xl text-5xl font-black transition-all duration-200 select-none',
        'bg-white/10 border border-white/15',
        !disabled && !value && 'cell-hover cursor-pointer hover:bg-white/20',
        disabled && !isWinning && 'cursor-default',
        isWinning && 'winning-cell bg-violet-700/50 border-violet-400/60',
        value === 'X' && 'text-pink-400',
        value === 'O' && 'text-blue-400',
        !value && 'text-transparent'
      )}
    >
      {value ?? '·'}
    </button>
  );
}

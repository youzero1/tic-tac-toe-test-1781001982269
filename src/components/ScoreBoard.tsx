type ScoreBoardProps = {
  scores: { X: number; O: number; draws: number };
};

export default function ScoreBoard({ scores }: ScoreBoardProps) {
  return (
    <div className="grid grid-cols-3 gap-3 mb-4 fade-in">
      <ScoreCard label="Player X" value={scores.X} color="text-pink-400" bg="bg-pink-500/10 border-pink-500/20" />
      <ScoreCard label="Draws" value={scores.draws} color="text-yellow-400" bg="bg-yellow-500/10 border-yellow-500/20" />
      <ScoreCard label="Player O" value={scores.O} color="text-blue-400" bg="bg-blue-500/10 border-blue-500/20" />
    </div>
  );
}

type ScoreCardProps = {
  label: string;
  value: number;
  color: string;
  bg: string;
};

function ScoreCard({ label, value, color, bg }: ScoreCardProps) {
  return (
    <div className={`flex flex-col items-center py-3 px-2 rounded-xl border ${bg}`}>
      <span className={`text-3xl font-extrabold ${color}`}>{value}</span>
      <span className="text-xs text-white/60 mt-1 font-medium">{label}</span>
    </div>
  );
}

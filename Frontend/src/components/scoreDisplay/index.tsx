interface ScoreDisplayProps {
  totalScore: number;
}

const ScoreDisplay = ({ totalScore }: ScoreDisplayProps) => (
  <div className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-4 md:p-6 text-center">
    <p className="text-white text-sm font-medium">Total Score</p>
    <p className="text-white text-2xl md:text-3xl font-bold">{totalScore}</p>
  </div>
);

export default ScoreDisplay;

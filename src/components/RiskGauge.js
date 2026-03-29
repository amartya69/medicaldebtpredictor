export default function RiskGauge({ score }) {
  const getColor = () => {
    if (score < 30) return "bg-green-500";
    if (score < 60) return "bg-yellow-500";
    if (score < 80) return "bg-orange-500";
    return "bg-red-600";
  };

  return (
    <div>
      <div className="w-full bg-gray-200 rounded h-6">
        <div
          className={`${getColor()} h-6 rounded text-white text-center`}
          style={{ width: `${score}%` }}
        >
          {score}%
        </div>
      </div>
    </div>
  );
}
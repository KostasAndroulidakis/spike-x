// frontend/src/components/training/TrainingOutcomes.tsx - start

import { Line } from "react-chartjs-2";

interface TrainingOutcomesProps {
  accuracyData: number[];
  lossData: number[];
  onSaveWeights: () => void;
  onSaveResults: () => void;
}

export function TrainingOutcomes({
  accuracyData,
  lossData,
  onSaveWeights,
  onSaveResults
}: TrainingOutcomesProps) {
  const accuracyChartData = {
    labels: accuracyData.map((_, index) => index + 1),
    datasets: [{
      label: "Accuracy",
      data: accuracyData,
      borderColor: "var(--chart-accuracy)",
      backgroundColor: "var(--chart-accuracy-bg)",
      fill: true,
      tension: 0.4
    }]
  };

  const lossChartData = {
    labels: lossData.map((_, index) => index + 1),
    datasets: [{
      label: "Loss",
      data: lossData,
      borderColor: "var(--chart-loss)",
      backgroundColor: "var(--chart-loss-bg)",
      fill: true,
      tension: 0.4
    }]
  };

  return (
    <div className="p-4 bg-[var(--nav-bg)] rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Training Outcomes</h2>
      <div className="mb-6">
        <h3 className="font-medium mb-2">Accuracy</h3>
        <div className="bg-[var(--background)] p-4 rounded-lg">
          <Line data={accuracyChartData} />
        </div>
      </div>
      <div className="mb-6">
        <h3 className="font-medium mb-2">Loss</h3>
        <div className="bg-[var(--background)] p-4 rounded-lg">
          <Line data={lossChartData} />
        </div>
      </div>
      <div className="space-y-4">
        <button
          onClick={onSaveWeights}
          className="w-full bg-[var(--success)] text-white px-4 py-2 rounded hover:opacity-90 transition-opacity"
        >
          SAVE WEIGHTS
        </button>
        <button
          onClick={onSaveResults}
          className="w-full bg-[var(--warning)] text-white px-4 py-2 rounded hover:opacity-90 transition-opacity"
        >
          SAVE RESULTS
        </button>
      </div>
    </div>
  );
}

// frontend/src/components/training/TrainingOutcomes.tsx - end
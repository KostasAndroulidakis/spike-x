interface ModelWeightsProps {
  trainedWeights: any;
  isTraining: boolean;
  onDownloadWeights: () => void;
}

export function ModelWeights({
  trainedWeights,
  isTraining,
  onDownloadWeights
}: ModelWeightsProps) {
  return (
    <div className="mt-3 panel">
      <h2 className="panel-header">Model Weights</h2>
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm">Trained weights: {trainedWeights ? "Available" : "Unavailable"}</span>
        <span className="text-xs text-secondary">{isTraining ? "Training in progress..." : ""}</span>
      </div>
      <button
        onClick={onDownloadWeights}
        className={`w-full ${
          trainedWeights 
            ? "btn btn-success" 
            : "bg-[var(--input-disabled-bg)] text-[var(--input-disabled-text)] cursor-not-allowed"
        }`}
        aria-label="Download trained model weights"
        disabled={!trainedWeights}
      >
        DOWNLOAD WEIGHTS
      </button>
    </div>
  );
}
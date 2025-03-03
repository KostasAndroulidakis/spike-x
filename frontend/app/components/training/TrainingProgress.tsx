interface TrainingProgressProps {
  currentBatch: number;
  totalBatchesPerEpoch: number;
  currentEpoch: number;
  numberOfEpochs: number;
  isTraining: boolean;
  onStartTraining: () => void;
  onStopTraining: () => void;
}

export function TrainingProgress({
  currentBatch,
  totalBatchesPerEpoch,
  currentEpoch,
  numberOfEpochs,
  isTraining,
  onStartTraining,
  onStopTraining
}: TrainingProgressProps) {
  return (
    <div className="panel">
      <h2 className="panel-header">Training Progress</h2>
      {/* Batch Progress */}
      <div className="mb-4">
        <label className="block font-medium text-sm mb-1 text-[var(--text)]">Batch Progress:</label>
        <div 
          className="progress-container" 
          role="progressbar"
          aria-valuenow={(currentBatch / totalBatchesPerEpoch) * 100}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Batch progress"
        >
          <div
            className="progress-bar progress-warning"
            style={{
              width: `${(currentBatch / totalBatchesPerEpoch) * 100}%`,
            }}
          ></div>
        </div>
        <p className="mt-1 text-xs text-secondary">
          Batch {currentBatch} / {totalBatchesPerEpoch} (
          {((currentBatch / totalBatchesPerEpoch) * 100).toFixed(1)}%)
        </p>
      </div>
      {/* Total Training Progress */}
      <div className="mb-4">
        <label className="block font-medium text-sm mb-1 text-[var(--text)]">Total Training Progress:</label>
        <div 
          className="progress-container"
          role="progressbar"
          aria-valuenow={(currentEpoch / numberOfEpochs) * 100}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Total training progress"
        >
          <div
            className="progress-bar progress-secondary"
            style={{
              width: `${(currentEpoch / numberOfEpochs) * 100}%`,
            }}
          ></div>
        </div>
        <p className="mt-1 text-xs text-secondary">
          Epoch {currentEpoch} / {numberOfEpochs} (
          {((currentEpoch / numberOfEpochs) * 100).toFixed(1)}%)
        </p>
      </div>
      
      {/* Training Controls */}
      <div className="mt-3">
        <div className="flex items-center justify-between gap-3">
          <button
            onClick={onStartTraining}
            className={`flex-1 px-4 py-2 rounded font-medium ${
              isTraining 
                ? "bg-[var(--primary-light)] text-[var(--primary)] cursor-not-allowed" 
                : "btn btn-primary"
            }`}
            disabled={isTraining}
            aria-label={isTraining ? "Training in progress" : "Start the training process"}
            aria-busy={isTraining}
          >
            {isTraining ? "TRAINING..." : "START TRAINING"}
          </button>
          
          <button
            onClick={onStopTraining}
            className={`flex-1 px-4 py-2 rounded ${
              isTraining 
                ? "btn btn-danger" 
                : "bg-[var(--input-disabled-bg)] text-[var(--input-disabled-text)]"
            }`}
            disabled={!isTraining}
            aria-label={isTraining ? "Stop the current training session" : "No active training session to stop"}
            title={isTraining ? "Stop training" : "No active training session"}
          >
            STOP TRAINING
          </button>
        </div>
      </div>
    </div>
  );
}
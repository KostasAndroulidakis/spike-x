interface TrainingConfigurationProps {
  trainingAlgorithm: string;
  onTrainingAlgorithmChange: (algorithm: string) => void;
  learningRate: number;
  onLearningRateChange: (rate: number) => void;
  numberOfEpochs: number;
  onNumberOfEpochsChange: (epochs: number) => void;
  selectedProcessor: string;
  onProcessorChange: (processor: string) => void;
}

export function TrainingConfiguration({
  trainingAlgorithm,
  onTrainingAlgorithmChange,
  learningRate,
  onLearningRateChange,
  numberOfEpochs,
  onNumberOfEpochsChange,
  selectedProcessor,
  onProcessorChange
}: TrainingConfigurationProps) {
  return (
    <div className="panel flex-shrink-0">
      <h2 className="panel-header">Training Configuration</h2>
      {/* Training Algorithm */}
      <div className="mb-3">
        <label className="block font-medium text-sm mb-1 text-[var(--text)]">Training Algorithm:</label>
        <select
          className="w-full p-1.5 rounded text-sm"
          value={trainingAlgorithm}
          onChange={(e) => onTrainingAlgorithmChange(e.target.value)}
        >
          <option value="STDP">STDP</option>
          <option value="Backpropagation">Backpropagation</option>
          <option value="R-STDP">R-STDP</option>
        </select>
      </div>
      {/* Learning Rate */}
      <div className="mb-3">
        <label className="block font-medium text-sm mb-1 text-[var(--text)]">Learning Rate:</label>
        <input
          type="number"
          step="0.001"
          min="0"
          className="w-full p-1.5 rounded text-sm"
          value={learningRate}
          onChange={(e) => onLearningRateChange(parseFloat(e.target.value))}
        />
      </div>
      {/* Number of Epochs */}
      <div className="mb-3">
        <label className="block font-medium text-sm mb-1 text-[var(--text)]">Number of Epochs:</label>
        <input
          type="number"
          step="1"
          min="1"
          className="w-full p-1.5 rounded text-sm"
          value={numberOfEpochs}
          onChange={(e) => onNumberOfEpochsChange(parseInt(e.target.value) || 1)}
        />
      </div>
      {/* Select Processor */}
      <div className="mb-3">
        <label className="block font-medium text-sm mb-1 text-[var(--text)]">Processor:</label>
        <select
          className="w-full p-1.5 rounded text-sm"
          value={selectedProcessor}
          onChange={(e) => onProcessorChange(e.target.value)}
        >
          <option value="CPU">CPU</option>
          <option value="GPU">GPU</option>
          <option value="TPU">TPU</option>
        </select>
      </div>
    </div>
  );
}
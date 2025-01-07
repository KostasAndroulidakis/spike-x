// File: spike-x/frontend/src/app/components/training/TrainingConfiguration.tsx - start

interface TrainingConfigurationProps {
    trainingAlgorithm: string;
    setTrainingAlgorithm: (algo: string) => void;
    learningRate: number;
    setLearningRate: (rate: number) => void;
    parameter: number;
    setParameter: (param: number) => void;
    numberOfEpochs: number;
    setNumberOfEpochs: (epochs: number) => void;
    // Προσθήκη των νέων props
    selectedProcessor: string;
    setSelectedProcessor: (processor: string) => void;
    onTrainModel: () => void;
    isTraining: boolean;
  }
  
  export function TrainingConfiguration({
    trainingAlgorithm,
    setTrainingAlgorithm,
    learningRate, 
    setLearningRate,
    parameter,
    setParameter,
    numberOfEpochs,
    setNumberOfEpochs,
    selectedProcessor,
    setSelectedProcessor,
    onTrainModel,
    isTraining
  }: TrainingConfigurationProps) {
    return (
      <div className="p-4 bg-[var(--nav-bg)] rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Training Configuration</h2>
        <div className="mb-4">
          <label className="block font-medium mb-2">Training Algorithm:</label>
          <select
            className="w-full p-2 bg-[var(--background)] border rounded"
            value={trainingAlgorithm}
            onChange={(e) => setTrainingAlgorithm(e.target.value)}
          >
            <option value="STDP">STDP</option>
            <option value="Backpropagation">Backpropagation</option>
            <option value="R-STDP">R-STDP</option>
          </select>
        </div>
        {/* Learning Rate, Parameter, Number of Epochs inputs here */}
      </div>
    );
  }

// File: spike-x/frontend/src/app/components/training/TrainingConfiguration.tsx - end
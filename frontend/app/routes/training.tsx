import { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { TrainingDataIntegration } from "../components/training/TrainingDataIntegration";
import { TrainingConfiguration } from "../components/training/TrainingConfiguration";
import { TrainingProgress } from "../components/training/TrainingProgress";
import { ModelWeights } from "../components/training/ModelWeights";
import { TrainingCharts } from "../components/training/TrainingCharts";
import { useTrainingSimulation } from "../hooks/training/useTrainingSimulation";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Training() {
  // Data Integration States
  const [selectedDataset, setSelectedDataset] = useState<string>("MNIST");
  const [customDataset, setCustomDataset] = useState<File | null>(null);

  // Training Configuration States
  const [trainingAlgorithm, setTrainingAlgorithm] = useState<string>("STDP");
  const [learningRate, setLearningRate] = useState<number>(0.01);
  const [numberOfEpochs, setNumberOfEpochs] = useState<number>(10);
  const [selectedProcessor, setSelectedProcessor] = useState<string>("CPU");

  // Training simulation via custom hook
  const {
    trainedWeights,
    accuracyData,
    lossData,
    performanceRate,
    errors,
    isTraining,
    currentEpoch,
    currentBatch,
    totalBatchesPerEpoch,
    handleTrainModel,
    handleStopTraining,
    handleDownloadWeights,
    handleSaveResults,
  } = useTrainingSimulation({
    numberOfEpochs
  });

  return (
    <div className="max-w-screen-2xl mx-auto flex flex-col overflow-hidden" style={{height: "calc(100vh - 65px)"}}>
      {/* Settings Sections - accounting for Navbar height (~56px) + additional margin (~9px) */}
      <div className="flex flex-col lg:flex-row gap-3 p-3 overflow-hidden flex-1">
        {/* Left Column */}
        <div className="w-full lg:w-1/4 flex flex-col overflow-y-auto space-y-3">
          {/* Data Integration */}
          <TrainingDataIntegration
            selectedDataset={selectedDataset}
            onSelectDataset={setSelectedDataset}
            onUploadDataset={setCustomDataset}
          />

          {/* Training Configuration */}
          <TrainingConfiguration
            trainingAlgorithm={trainingAlgorithm}
            onTrainingAlgorithmChange={setTrainingAlgorithm}
            learningRate={learningRate}
            onLearningRateChange={setLearningRate}
            numberOfEpochs={numberOfEpochs}
            onNumberOfEpochsChange={setNumberOfEpochs}
            selectedProcessor={selectedProcessor}
            onProcessorChange={setSelectedProcessor}
          />
        </div>

        {/* Middle Column */}
        <div className="w-full lg:w-2/4 flex flex-col overflow-y-auto px-1.5">
          {/* Training Progress */}
          <TrainingProgress
            currentBatch={currentBatch}
            totalBatchesPerEpoch={totalBatchesPerEpoch}
            currentEpoch={currentEpoch}
            numberOfEpochs={numberOfEpochs}
            isTraining={isTraining}
            onStartTraining={handleTrainModel}
            onStopTraining={handleStopTraining}
          />
          
          {/* Weights Panel */}
          <ModelWeights
            trainedWeights={trainedWeights}
            isTraining={isTraining}
            onDownloadWeights={handleDownloadWeights}
          />
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-1/4 flex flex-col overflow-y-auto">
          {/* Training Results and Charts */}
          <TrainingCharts
            accuracyData={accuracyData}
            lossData={lossData}
            performanceRate={performanceRate}
            errors={errors}
            onSaveResults={handleSaveResults}
          />
        </div>
      </div>
    </div>
  );
}
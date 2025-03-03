import { useState, useEffect } from 'react';

interface TrainingSimulationState {
  // Training Outcomes States
  trainedWeights: any;
  accuracyData: number[];
  lossData: number[];

  // Training Meters States
  performanceRate: number;
  errors: number;
  modelProgress: number;

  // Training State
  isTraining: boolean;

  // Epoch Metering States
  currentEpoch: number;
  currentBatch: number;
}

interface UseTrainingSimulationProps {
  numberOfEpochs: number;
}

export function useTrainingSimulation({ numberOfEpochs }: UseTrainingSimulationProps) {
  const totalBatchesPerEpoch = 100; // Assuming 100 batches per epoch

  const [state, setState] = useState<TrainingSimulationState>({
    trainedWeights: null,
    accuracyData: [],
    lossData: [],
    performanceRate: 0,
    errors: 0,
    modelProgress: 0,
    isTraining: false,
    currentEpoch: 0,
    currentBatch: 0,
  });

  // Handle Train Model Button Click
  const handleTrainModel = () => {
    if (state.isTraining) {
      alert("Training is already in progress.");
      return;
    }
    
    // Reset previous training data
    setState({
      ...state,
      isTraining: true,
      trainedWeights: null,
      accuracyData: [],
      lossData: [],
      performanceRate: 0,
      errors: 0,
      modelProgress: 0,
      currentEpoch: 0,
      currentBatch: 0,
    });

    // Simulate training weights after training completes
    setTimeout(() => {
      setState(prev => ({
        ...prev,
        trainedWeights: { weights: "Sample Trained Weights Data" },
        isTraining: false,
      }));
    }, numberOfEpochs * 1000); // Example: 1 second per epoch for simulation
  };

  // Handle Stop Training
  const handleStopTraining = () => {
    setState(prev => ({
      ...prev,
      isTraining: false,
    }));
  };

  // Download Weights
  const handleDownloadWeights = () => {
    if (state.trainedWeights) {
      const dataStr =
        "data:text/json;charset=utf-8," +
        encodeURIComponent(JSON.stringify(state.trainedWeights));
      const downloadAnchorNode = document.createElement("a");
      downloadAnchorNode.setAttribute("href", dataStr);
      downloadAnchorNode.setAttribute("download", "trained_weights.json");
      document.body.appendChild(downloadAnchorNode);
      downloadAnchorNode.click();
      downloadAnchorNode.remove();
    } else {
      alert("No trained weights available to download.");
    }
  };

  // Handle Save Results
  const handleSaveResults = () => {
    alert("SAVE RESULTS button clicked.");
    // Implement the actual save results functionality here
  };

  // Simulate Training Process
  useEffect(() => {
    if (!state.isTraining) return;

    // This effect simulates training by updating metrics every second
    const interval = setInterval(() => {
      setState(prev => {
        // Update batch counter
        let newBatch = prev.currentBatch + 1;
        let newEpoch = prev.currentEpoch;
        
        // If we've completed all batches in this epoch, move to next epoch
        if (newBatch > totalBatchesPerEpoch) {
          newBatch = 1;
          newEpoch += 1;
        }
        
        // If all epochs completed, finish training
        if (newEpoch >= numberOfEpochs && newBatch >= totalBatchesPerEpoch) {
          clearInterval(interval);
          return {
            ...prev,
            isTraining: false,
            trainedWeights: { weights: "Sample Trained Weights Data" },
            performanceRate: 100,
            errors: 50,
            modelProgress: 100,
            currentBatch: totalBatchesPerEpoch,
            currentEpoch: numberOfEpochs,
          };
        }
        
        return {
          ...prev,
          performanceRate: Math.min(prev.performanceRate + 1, 100),
          errors: Math.min(prev.errors + 1, 50),
          modelProgress: Math.min(prev.modelProgress + 1, 100),
          accuracyData: [...prev.accuracyData, Math.random() * 100],
          lossData: [...prev.lossData, Math.random()],
          currentBatch: newBatch,
          currentEpoch: newEpoch,
        };
      });
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, [state.isTraining, numberOfEpochs]);

  return {
    ...state,
    totalBatchesPerEpoch,
    handleTrainModel,
    handleStopTraining,
    handleDownloadWeights,
    handleSaveResults,
  };
}
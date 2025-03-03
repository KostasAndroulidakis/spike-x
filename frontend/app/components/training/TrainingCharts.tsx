import React from "react";
import { 
  Panel, 
  Chart, 
  ProgressBar,
  Button
} from "../ui";

interface TrainingChartsProps {
  accuracyData: number[];
  lossData: number[];
  performanceRate: number;
  errors: number;
  onSaveResults: () => void;
}

/**
 * Displays training results including accuracy and loss charts
 * and performance metrics
 */
export function TrainingCharts({
  accuracyData,
  lossData,
  performanceRate,
  errors,
  onSaveResults
}: TrainingChartsProps) {
  // Chart datasets with fixed colors independent of theme
  const accuracyDataset = {
    label: "Accuracy",
    data: accuracyData,
    borderColor: "#20abad", // Turquoise - hardcoded to ensure consistency
    backgroundColor: "rgba(32, 171, 173, 0.15)", // Light turquoise background
  };

  const lossDataset = {
    label: "Loss",
    data: lossData,
    borderColor: "#ff4979", // Pinkish - hardcoded to ensure consistency
    backgroundColor: "rgba(255, 73, 121, 0.15)", // Light pink background
  };

  return (
    <Panel title="Training Results">
      {/* Accuracy Chart */}
      <Chart 
        datasets={[accuracyDataset]} 
        height={100} 
        title="Accuracy" 
      />
      
      {/* Loss Chart */}
      <Chart 
        datasets={[lossDataset]} 
        height={100} 
        title="Loss" 
      />
      
      {/* Performance Metrics */}
      <div className="mb-3 flex-shrink-0">
        <h3 className="font-medium text-sm mb-1">Performance</h3>
        
        <ProgressBar
          value={performanceRate}
          max={100}
          label="Performance Rate"
          colorClass="progress-primary"
          ariaLabel="Performance rate"
        />
        
        <ProgressBar
          value={errors}
          max={100}
          label="Errors"
          colorClass="progress-error"
          ariaLabel="Error count"
          showPercentage={false}
        />
        <p className="mt-1 text-xs text-secondary">{errors} Errors</p>
      </div>
      
      {/* Save Results Button */}
      <div className="mt-3">
        <Button
          onClick={onSaveResults}
          variant="warning"
          fullWidth
          ariaLabel="Save training results to file"
        >
          SAVE RESULTS
        </Button>
      </div>
    </Panel>
  );
}
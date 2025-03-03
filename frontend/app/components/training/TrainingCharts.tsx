import { Line } from "react-chartjs-2";
import { useTheme } from "../../components/theme/ThemeProvider";

interface TrainingChartsProps {
  accuracyData: number[];
  lossData: number[];
  performanceRate: number;
  errors: number;
  onSaveResults: () => void;
}

export function TrainingCharts({
  accuracyData,
  lossData,
  performanceRate,
  errors,
  onSaveResults
}: TrainingChartsProps) {
  const { theme } = useTheme();
  
  const getChartOptions = () => {
    return {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        x: {
          grid: {
            color: `var(--chart-grid)`,
          },
          ticks: {
            color: `var(--chart-tick)`,
          }
        },
        y: {
          grid: {
            color: `var(--chart-grid)`,
          },
          ticks: {
            color: `var(--chart-tick)`,
          }
        }
      }
    };
  };

  // Chart Data
  const accuracyChartData = {
    labels: accuracyData.map((_, index) => index + 1),
    datasets: [
      {
        label: "Accuracy",
        data: accuracyData,
        borderColor: "var(--chart-line-1)",
        backgroundColor: "transparent",
        borderWidth: 2,
        fill: false,
        tension: 0.1
      },
    ],
  };

  const lossChartData = {
    labels: lossData.map((_, index) => index + 1),
    datasets: [
      {
        label: "Loss",
        data: lossData,
        borderColor: "var(--chart-line-2)",
        backgroundColor: "transparent",
        borderWidth: 2,
        fill: false,
        tension: 0.1
      },
    ],
  };

  return (
    <div className="panel flex flex-col">
      <h2 className="panel-header">Training Results</h2>
      
      {/* Accuracy Graph */}
      <div className="mb-3 flex-shrink-0">
        <h3 className="font-medium text-sm mb-1">Accuracy</h3>
        <div className="h-24">
          <Line 
            data={accuracyChartData} 
            options={getChartOptions()}
          />
        </div>
      </div>
      
      {/* Loss Graph */}
      <div className="mb-3 flex-shrink-0">
        <h3 className="font-medium text-sm mb-1">Loss</h3>
        <div className="h-24">
          <Line 
            data={lossChartData} 
            options={getChartOptions()}
          />
        </div>
      </div>
      
      {/* Performance Meters */}
      <div className="mb-3 flex-shrink-0">
        <h3 className="font-medium text-sm mb-1">Performance</h3>
        
        <div className="mb-3">
          <label className="block text-sm mb-1">Performance Rate:</label>
          <div 
            className="progress-container"
            role="progressbar"
            aria-valuenow={performanceRate}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Performance rate"
          >
            <div
              className="progress-bar progress-primary"
              style={{ width: `${performanceRate}%` }}
            ></div>
          </div>
          <p className="mt-1 text-xs text-secondary">{performanceRate}%</p>
        </div>
        
        <div>
          <label className="block text-sm mb-1">Errors:</label>
          <div 
            className="progress-container"
            role="progressbar"
            aria-valuenow={errors}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Error count"
          >
            <div
              className="progress-bar progress-error"
              style={{ width: `${errors}%` }}
            ></div>
          </div>
          <p className="mt-1 text-xs text-secondary">{errors} Errors</p>
        </div>
      </div>
      
      {/* Save Results Button */}
      <div className="mt-3">
        <button
          onClick={onSaveResults}
          className="w-full btn btn-warning"
          aria-label="Save training results to file"
        >
          SAVE RESULTS
        </button>
      </div>
    </div>
  );
}
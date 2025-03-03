import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { useTheme } from "../theme/ThemeProvider";

interface ChartDataset {
  label: string;
  data: number[];
  borderColor: string;
  backgroundColor: string;
}

interface ChartProps {
  datasets: ChartDataset[];
  height?: number;
  title?: string;
  showLegend?: boolean;
}

/**
 * Reusable chart component with standardized styling and theme awareness
 */
export function Chart({
  datasets,
  height = 100,
  title,
  showLegend = false
}: ChartProps) {
  const { theme } = useTheme();
  
  // Key to force chart re-render when theme changes
  const [chartKey, setChartKey] = useState(0);
  
  // Force chart to re-render when theme changes
  useEffect(() => {
    setChartKey(prev => prev + 1);
  }, [theme]);
  
  // Chart options with theme-aware grid colors
  const getChartOptions = () => {
    // Explicitly use light grid lines in dark theme and dark grid lines in light theme
    const gridColor = theme === 'dark' 
      ? 'rgba(255, 255, 255, 0.25)' // Light colored grid lines in dark theme
      : 'rgba(0, 0, 0, 0.25)'; // Dark colored grid lines in light theme
    
    const tickColor = theme === 'dark'
      ? 'rgba(255, 255, 255, 0.8)' // Light colored tick labels in dark theme
      : 'rgba(0, 0, 0, 0.7)'; // Dark colored tick labels in light theme
    
    return {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: showLegend
        }
      },
      scales: {
        x: {
          grid: {
            color: gridColor,
          },
          ticks: {
            color: tickColor,
          }
        },
        y: {
          grid: {
            color: gridColor,
          },
          ticks: {
            color: tickColor,
          }
        }
      }
    };
  };

  // Prepare chart data
  const chartData = {
    // Generate labels based on dataset length (assuming all datasets have same length)
    labels: datasets[0]?.data.map((_, index) => index + 1) || [],
    datasets: datasets.map(dataset => ({
      ...dataset,
      borderWidth: 3,
      fill: true,
      tension: 0.1
    })),
  };

  return (
    <div className="mb-3 flex-shrink-0">
      {title && <h3 className="font-medium text-sm mb-1">{title}</h3>}
      <div style={{ height: `${height}px` }}>
        <Line 
          key={`chart-${chartKey}`}
          data={chartData} 
          options={getChartOptions()}
        />
      </div>
    </div>
  );
}
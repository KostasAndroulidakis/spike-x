// File: spike-x/frontend/app/routes/training.tsx

import { useState, useEffect } from "react";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import { FaExpand } from "react-icons/fa";
import dynamic from "next/dynamic";
import { Line } from "react-chartjs-2";
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

// Dynamically import visualizer components to prevent SSR issues
const Visualizer2D = dynamic(() => import("../components/visualizer1"), {
  ssr: false,
});
const Visualizer3D = dynamic(() => import("../components/visualizer0"), {
  ssr: false,
});

export default function Training() {
  // Visualization Toggle State
  const [is3D, setIs3D] = useState<boolean>(false);

  // Data Integration States
  const [selectedDataset, setSelectedDataset] = useState<string>("MNIST");
  const [customDataset, setCustomDataset] = useState<File | null>(null);

  // Training Configuration States
  const [trainingAlgorithm, setTrainingAlgorithm] = useState<string>("STDP");
  const [learningRate, setLearningRate] = useState<number>(0.01);
  const [parameter, setParameter] = useState<number>(1.0);

  // Training Outcomes States
  const [trainedWeights, setTrainedWeights] = useState<any>(null);
  const [accuracyData, setAccuracyData] = useState<number[]>([]);
  const [lossData, setLossData] = useState<number[]>([]);

  // Training Visualization States
  const [performanceRate, setPerformanceRate] = useState<number>(0);
  const [errors, setErrors] = useState<number>(0);
  const [modelProgress, setModelProgress] = useState<number>(0);

  // Chart Data
  const accuracyChartData = {
    labels: accuracyData.map((_, index) => index + 1),
    datasets: [
      {
        label: "Accuracy",
        data: accuracyData,
        borderColor: "rgba(75, 192, 192, 1)",
        fill: false,
      },
    ],
  };

  const lossChartData = {
    labels: lossData.map((_, index) => index + 1),
    datasets: [
      {
        label: "Loss",
        data: lossData,
        borderColor: "rgba(255, 99, 132, 1)",
        fill: false,
      },
    ],
  };

  // Handle Custom Dataset Upload
  const handleDatasetUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCustomDataset(e.target.files[0]);
    }
  };

  // Handle Download Trained Weights
  const handleDownloadWeights = () => {
    if (trainedWeights) {
      const dataStr =
        "data:text/json;charset=utf-8," +
        encodeURIComponent(JSON.stringify(trainedWeights));
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

  // Simulate Training Process (For Demonstration)
  useEffect(() => {
    // This effect simulates training by updating metrics every second
    const interval = setInterval(() => {
      setPerformanceRate((prev) => (prev < 100 ? prev + 1 : 100));
      setErrors((prev) => (prev < 50 ? prev + 1 : 50));
      setModelProgress((prev) => (prev < 100 ? prev + 1 : 100));
      setAccuracyData((prev) => [...prev, Math.random() * 100]);
      setLossData((prev) => [...prev, Math.random()]);
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 max-w-screen-2xl mx-auto">
      {/* Settings Sections */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Column */}
        <div className="w-full lg:w-1/2 space-y-6">
          {/* Data Integration */}
          <div className="p-4 border border-gray-300 rounded">
            <h2 className="text-xl font-semibold mb-4">Data Integration</h2>
            {/* Ready-Made Datasets */}
            <div className="mb-4">
              <label className="block font-medium mb-2">Select Dataset:</label>
              <select
                className="w-full p-2 border rounded"
                value={selectedDataset}
                onChange={(e) => setSelectedDataset(e.target.value)}
              >
                <option value="MNIST">MNIST</option>
                <option value="CIFAR-10">CIFAR-10</option>
                <option value="Fashion-MNIST">Fashion-MNIST</option>
                {/* Add more datasets as needed */}
              </select>
            </div>
            {/* Custom Dataset Upload */}
            <div>
              <label className="block font-medium mb-2">Upload Custom Dataset:</label>
              <input
                type="file"
                accept=".csv,.json,.txt"
                onChange={handleDatasetUpload}
                className="w-full p-2 border rounded"
              />
              {customDataset && (
                <p className="mt-2 text-green-600">Selected File: {customDataset.name}</p>
              )}
            </div>
          </div>

          {/* Training Configuration */}
          <div className="p-4 border border-gray-300 rounded">
            <h2 className="text-xl font-semibold mb-4">Training Configuration</h2>
            {/* Training Algorithm */}
            <div className="mb-4">
              <label className="block font-medium mb-2">Training Algorithm:</label>
              <select
                className="w-full p-2 border rounded"
                value={trainingAlgorithm}
                onChange={(e) => setTrainingAlgorithm(e.target.value)}
              >
                <option value="STDP">STDP</option>
                <option value="Backpropagation">Backpropagation</option>
                <option value="R-STDP">R-STDP</option>
                {/* Add more algorithms as needed */}
              </select>
            </div>
            {/* Learning Rate */}
            <div className="mb-4">
              <label className="block font-medium mb-2">Learning Rate:</label>
              <input
                type="number"
                step="0.001"
                min="0"
                className="w-full p-2 border rounded"
                value={learningRate}
                onChange={(e) => setLearningRate(parseFloat(e.target.value))}
              />
            </div>
            {/* Additional Parameter */}
            <div>
              <label className="block font-medium mb-2">Parameter:</label>
              <input
                type="number"
                step="0.1"
                min="0"
                className="w-full p-2 border rounded"
                value={parameter}
                onChange={(e) => setParameter(parseFloat(e.target.value))}
              />
            </div>
          </div>

          {/* Training Visualization */}
          <div className="p-4 border border-gray-300 rounded">
            <h2 className="text-xl font-semibold mb-4">Training Visualization</h2>
            {/* Performance Rate */}
            <div className="mb-4">
              <label className="block font-medium mb-2">Performance Rate:</label>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className="bg-blue-600 h-4 rounded-full"
                  style={{ width: `${performanceRate}%` }}
                ></div>
              </div>
              <p className="mt-1 text-sm text-white">{performanceRate}%</p>
            </div>
            {/* Errors Overview */}
            <div className="mb-4">
              <label className="block font-medium mb-2">Errors:</label>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className="bg-red-600 h-4 rounded-full"
                  style={{ width: `${errors}%` }}
                ></div>
              </div>
              <p className="mt-1 text-sm text-white">{errors} Errors</p>
            </div>
            {/* Model Progress */}
            <div>
              <label className="block font-medium mb-2">Model Progress:</label>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className="bg-green-600 h-4 rounded-full"
                  style={{ width: `${modelProgress}%` }}
                ></div>
              </div>
              <p className="mt-1 text-sm text-white">{modelProgress}% Completed</p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-1/2 space-y-6">
          {/* Real-time Visualization */}
          <div className="p-4 border border-gray-300 rounded">
            <h2 className="text-xl font-semibold mb-4">Real-time Visualization</h2>
            <div className="relative">
              <div className="flex items-center mb-2">
                <Toggle
                  checked={is3D}
                  onChange={() => setIs3D(!is3D)}
                  icons={{
                    checked: <span className="text-xs">3D</span>,
                    unchecked: <span className="text-xs">2D</span>,
                  }}
                  className="mr-2"
                />
                <span className="font-medium">Visualization Mode</span>
                <button
                  onClick={() => window.open("/visualization", "_blank")}
                  className="ml-4 text-gray-600 hover:text-gray-800"
                  title="Full Screen"
                >
                  <FaExpand size={20} />
                </button>
              </div>
              <div className="w-full h-96 border border-gray-300 rounded">
                {is3D ? <Visualizer3D /> : <Visualizer2D layers={[]} />}
              </div>
            </div>
          </div>

          {/* Training Outcomes */}
          <div className="p-4 border border-gray-300 rounded">
            <h2 className="text-xl font-semibold mb-4">Training Outcomes</h2>
            {/* Download Trained Weights */}
            <div className="mb-6">
              <button
                onClick={handleDownloadWeights}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Download Trained Weights
              </button>
            </div>
            {/* Accuracy Graph */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Accuracy</h3>
              <Line data={accuracyChartData} />
            </div>
            {/* Loss Graph */}
            <div>
              <h3 className="font-medium mb-2">Loss</h3>
              <Line data={lossChartData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

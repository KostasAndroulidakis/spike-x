import React, { useState } from "react";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import dynamic from "next/dynamic";
import { FaExpand } from "react-icons/fa";

// Dynamically import visualizer components to prevent SSR issues
const Visualizer2D = dynamic(() => import("../components/visualizers/visualizer2D"), {
  ssr: false,
});
const Visualizer3D = dynamic(() => import("../components/visualizers/visualizer3D"), {
  ssr: false,
});

export default function Visualization() {
  // Visualization Toggle State
  const [is3D, setIs3D] = useState<boolean>(false);

  return (
    <div className="p-4 max-w-screen-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Neural Network Visualization</h1>
      
      {/* Real-time Visualization */}
      <div className="panel">
        <h2 className="panel-header">Real-time Visualization</h2>
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
          </div>
          <div className="w-full h-128 border-[var(--border)] rounded overflow-hidden visualization-canvas">
            {is3D ? <Visualizer3D /> : <Visualizer2D layers={[]} />}
          </div>
        </div>
      </div>
      
      {/* Additional visualization controls can be added here */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="panel">
          <h2 className="panel-header">Visualization Controls</h2>
          <p className="mb-4">Additional controls for neural network visualization will be added here.</p>
        </div>
        
        <div className="panel">
          <h2 className="panel-header">Network Details</h2>
          <p className="mb-4">Network architecture details and statistics will be displayed here.</p>
        </div>
      </div>
    </div>
  );
}

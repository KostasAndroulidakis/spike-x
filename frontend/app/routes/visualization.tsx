import React, { useState } from "react";
import dynamic from "next/dynamic";

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
      {/* Real-time Visualization */}
      <div className="panel">
        <div className="flex justify-between items-center mb-3">
          <h2 className="panel-header m-0">Real-time Visualization</h2>
          
          <div className="flex items-center gap-2">
            <button
              className={`px-3 py-1 rounded text-sm font-medium ${!is3D ? 'bg-[var(--primary)] text-white' : 'bg-[var(--card-bg)] text-[var(--text)]'}`}
              onClick={() => setIs3D(false)}
            >
              2D View
            </button>
            <button
              className={`px-3 py-1 rounded text-sm font-medium ${is3D ? 'bg-[var(--primary)] text-white' : 'bg-[var(--card-bg)] text-[var(--text)]'}`}
              onClick={() => setIs3D(true)}
            >
              3D View
            </button>
          </div>
        </div>
        
        <div className="relative">
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

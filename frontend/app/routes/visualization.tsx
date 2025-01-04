// spike-x/frontend/app/routes/visualization.tsx

import React, { useState } from "react";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import Visualizer from "/Users/kanon/projects/spike-x/frontend/app/components/Visualizer.tsx"; 


const Visualization = () => {
  const [layers, setLayers] = useState([]);

  return (
    <div className="p-4 max-w-screen-lg mx-auto">
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Real-Time Visualization</h2>
        <Visualizer layers={layers} />
      </div>
    </div>
  );
};

export default Visualization;

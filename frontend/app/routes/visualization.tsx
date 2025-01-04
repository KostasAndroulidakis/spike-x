import React, { useState } from "react";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import Visualizer0 from "~/components/visualizer0";
import Visualizer1 from "~/components/visualizer1";

const Visualization = () => {
  const [useVisualizer0, setUseVisualizer0] = useState(true);

  return (
    <div className="p-4 max-w-screen-lg mx-auto">
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Real-Time Visualization</h2>
        <div className="flex items-center mb-4">
          <label htmlFor="visualizer-toggle" className="mr-2 font-medium">
            {useVisualizer0 ? "Visualizer 0" : "Visualizer 1"}
          </label>
          <Toggle
            id="visualizer-toggle"
            defaultChecked={useVisualizer0}
            onChange={() => setUseVisualizer0(!useVisualizer0)}
          />
        </div>
        <div className="visualization-container">
          {useVisualizer0 ? <Visualizer0 /> : <Visualizer1 layers={[]} />}
        </div>
      </div>
    </div>
  );
};

export default Visualization;

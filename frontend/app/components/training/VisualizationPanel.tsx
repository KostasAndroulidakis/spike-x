// File: spike-x/frontend/app/components/training/VisualizationPanel.tsx - start

import Toggle from "react-toggle";
import { FaExpand } from "react-icons/fa";
import dynamic from "next/dynamic";

const Visualizer2D = dynamic(() => import("../visualizers/visualizer2D"), {
  ssr: false,
});

const Visualizer3D = dynamic(() => import("../visualizers/visualizer3D"), {
  ssr: false,
});

interface VisualizationPanelProps {
  is3D: boolean;
  setIs3D: (is3D: boolean) => void;
}

export function VisualizationPanel({
  is3D,
  setIs3D
}: VisualizationPanelProps) {
  return (
    <div className="p-4 bg-[var(--nav-bg)] rounded-lg">
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
            className="ml-4 text-[var(--text)] hover:text-[var(--nav-hover)]"
            title="Full Screen"
          >
            <FaExpand size={20} />
          </button>
        </div>
        <div className="w-full h-128 bg-[var(--code-bg)] rounded-lg overflow-hidden">
          {is3D ? <Visualizer3D /> : <Visualizer2D layers={[]} />}
        </div>
      </div>
    </div>
  );
}

// File: spike-x/frontend/app/components/training/VisualizationPanel.tsx - end
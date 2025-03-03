// components/architecture/controls/AxonControls.tsx
import React from 'react';
import Toggle from "react-toggle";
import "react-toggle/style.css";

interface AxonControlsProps {
  axons: number;
  axonType: string;
  axonsEnabled: boolean;
  onUpdate: (key: string, value: any) => void;
}

const AxonControls: React.FC<AxonControlsProps> = ({
  axons,
  axonType,
  axonsEnabled,
  onUpdate,
}) => {
  return (
    <div className="flex-1">
      <label className="font-medium flex items-center mb-2 text-[var(--text)]">
        <Toggle
          checked={axonsEnabled}
          onChange={() =>
            onUpdate("axonsEnabled", !axonsEnabled)
          }
          icons={false}
          className="mr-2"
        />
        Axons
      </label>
      {axonsEnabled && (
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-[var(--text)]">Total Axons:</label>
            <input
              type="number"
              className="w-full p-2 rounded"
              value={axons}
              onChange={(e) =>
                onUpdate("axons", parseInt(e.target.value, 10))
              }
            />
          </div>
          <div>
            <label className="block mb-1 text-[var(--text)]">Axon Type:</label>
            <select
              className="w-full p-2 rounded"
              value={axonType}
              onChange={(e) =>
                onUpdate("axonType", e.target.value)
              }
            >
              <option value="LIF">Leaky Integrate-and-Fire (LIF)</option>
              <option value="Hodgkin-Huxley">Hodgkin-Huxley Model</option>
              <option value="QIF">Quadratic Integrate-and-Fire (QIF)</option>
              <option value="Izhikevich">Izhikevich Model</option>
              <option value="SRM">Spike Response Model (SRM)</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default AxonControls;
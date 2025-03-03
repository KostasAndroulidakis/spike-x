// components/architecture/controls/DendritesControls.tsx
import React from 'react';
import Toggle from "react-toggle";
import "react-toggle/style.css";

interface DendritesControlsProps {
  dendrites: number;
  dendriteType: string;
  dendritesEnabled: boolean;
  onUpdate: (key: string, value: any) => void;
}

const DendritesControls: React.FC<DendritesControlsProps> = ({
  dendrites,
  dendriteType,
  dendritesEnabled,
  onUpdate,
}) => {
  return (
    <div className="flex-1">
      <label className="font-medium flex items-center mb-2 text-[var(--text)]">
        <Toggle
          checked={dendritesEnabled}
          onChange={() =>
            onUpdate("dendritesEnabled", !dendritesEnabled)
          }
          icons={false}
          className="mr-2"
        />
        Dendrites
      </label>
      {dendritesEnabled && (
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-[var(--text)]">Total Dendrites:</label>
            <input
              type="number"
              className="w-full p-2 rounded"
              value={dendrites}
              onChange={(e) =>
                onUpdate("dendrites", parseInt(e.target.value, 10))
              }
            />
          </div>
          <div>
            <label className="block mb-1 text-[var(--text)]">Dendrite Type:</label>
            <select
              className="w-full p-2 rounded"
              value={dendriteType}
              onChange={(e) =>
                onUpdate("dendriteType", e.target.value)
              }
            >
              <option value="Multi-Compartment Models">Multi-Compartment Models</option>
              <option value="NLIF">Non-linear Integrate-and-Fire (NLIF)</option>
              <option value="AdEx">AdEx Model</option>
              <option value="Theta Neuron Model">Theta Neuron Model</option>
              <option value="Branch-Specific Plasticity Models">Branch-Specific Plasticity Models</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default DendritesControls;
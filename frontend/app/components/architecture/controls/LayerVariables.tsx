// components/architecture/controls/LayerVariables.tsx
import React from 'react';
import Toggle from "react-toggle";
import "react-toggle/style.css";

interface LayerVariablesProps {
  membranePotential: number;
  membranePotentialEnabled: boolean;
  synapticConstants: number;
  synapticConstantsEnabled: boolean;
  synapticConnectionType: string;
  synapticConnectionTypeEnabled: boolean;
  onUpdate: (key: string, value: any) => void;
}

const LayerVariables: React.FC<LayerVariablesProps> = ({
  membranePotential,
  membranePotentialEnabled,
  synapticConstants,
  synapticConstantsEnabled,
  synapticConnectionType,
  synapticConnectionTypeEnabled,
  onUpdate,
}) => {
  return (
    <div className="flex space-x-4">
      {/* Membrane Potential */}
      <div className="flex-1">
        <label className="font-medium flex items-center mb-2 text-[var(--text)]">
          <Toggle
            checked={membranePotentialEnabled}
            onChange={() =>
              onUpdate("membranePotentialEnabled", !membranePotentialEnabled)
            }
            icons={false}
            className="mr-2"
          />
          Membrane Potential
        </label>
        {membranePotentialEnabled && (
          <div>
            <label className="block mb-1 text-[var(--text)]">Membrane Potential Value:</label>
            <input
              type="number"
              className="w-full p-2 border rounded bg-[var(--background)] text-[var(--text)] border-[var(--secondary)]"
              value={membranePotential}
              onChange={(e) =>
                onUpdate("membranePotential", parseFloat(e.target.value))
              }
            />
          </div>
        )}
      </div>

      {/* Synaptic Constants */}
      <div className="flex-1">
        <label className="font-medium flex items-center mb-2 text-[var(--text)]">
          <Toggle
            checked={synapticConstantsEnabled}
            onChange={() =>
              onUpdate("synapticConstantsEnabled", !synapticConstantsEnabled)
            }
            icons={false}
            className="mr-2"
          />
          Synaptic Constants
        </label>
        {synapticConstantsEnabled && (
          <div>
            <label className="block mb-1 text-[var(--text)]">Synaptic Constants Value:</label>
            <input
              type="number"
              className="w-full p-2 border rounded bg-[var(--background)] text-[var(--text)] border-[var(--secondary)]"
              value={synapticConstants}
              onChange={(e) =>
                onUpdate("synapticConstants", parseFloat(e.target.value))
              }
            />
          </div>
        )}
      </div>

      {/* Synaptic Connection Type */}
      <div className="flex-1">
        <label className="font-medium flex items-center mb-2 text-[var(--text)]">
          <Toggle
            checked={synapticConnectionTypeEnabled}
            onChange={() =>
              onUpdate("synapticConnectionTypeEnabled", !synapticConnectionTypeEnabled)
            }
            icons={false}
            className="mr-2"
          />
          Synaptic Connection Type
        </label>
        {synapticConnectionTypeEnabled && (
          <div>
            <label className="block mb-1 text-[var(--text)]">Connection Type:</label>
            <select
              className="w-full p-2 border rounded bg-[var(--background)] text-[var(--text)] border-[var(--secondary)]"
              value={synapticConnectionType}
              onChange={(e) =>
                onUpdate("synapticConnectionType", e.target.value)
              }
            >
              <option value="Excitation">Excitation</option>
              <option value="Inhibition">Inhibition</option>
            </select>
          </div>
        )}
      </div>
    </div>
  );
};

export default LayerVariables;
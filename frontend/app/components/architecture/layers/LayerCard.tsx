// components/architecture/layers/LayerCard.tsx

import React from 'react';
import Toggle from "react-toggle";
import "react-toggle/style.css";
import NeuronControls from '../controls/NeuronControls';
import SynapsesControls from '../controls/SynapseControls';
import AxonControls from '../controls/AxonControls';

interface LayerProps {
  layer: {
    name: string;
    neurons: number;
    neuronType: string;
    synapses: number;
    synapseType: string;
    synapticConnectionType: string;
    synapticConnectionTypeEnabled: boolean;
    axons: number;
    axonType: string;
    dendrites: number;
    dendriteType: string;
    axonsEnabled: boolean;
    dendritesEnabled: boolean;
    membranePotentialEnabled: boolean;
    membranePotential: number;
    synapticConstantsEnabled: boolean;
    synapticConstants: number;
  };
  isOpen: boolean;
  onToggle: () => void;
  onUpdate: (key: string, value: any) => void;
  showDeleteButton?: boolean;
  onDelete?: () => void;
}

const LayerCard: React.FC<LayerProps> = ({
  layer,
  isOpen,
  onToggle,
  onUpdate,
  showDeleteButton = true,
  onDelete
}) => {
  return (
    <div className="p-4 border border-[var(--secondary)] rounded bg-[var(--background)]">
      {/* Layer Header */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={onToggle}
      >
        <h2 className="text-lg font-semibold text-[var(--text)]">{layer.name}</h2>
        <span className="text-[var(--secondary)]">
          {isOpen ? "▲" : "▼"}
        </span>
      </div>

      {/* Layer Settings */}
      {isOpen && (
        <div className="mt-4 space-y-6">
          {/* Neurons & Synapses */}
          <div className="grid grid-cols-2 gap-4">
            <NeuronControls
              neurons={layer.neurons}
              neuronType={layer.neuronType}
              onUpdate={onUpdate}
            />
            <SynapsesControls
              synapses={layer.synapses}
              synapseType={layer.synapseType}
              onUpdate={onUpdate}
            />
          </div>

          {/* Axons & Dendrites */}
          <div className="flex space-x-4">
            <AxonControls
              axons={layer.axons}
              axonType={layer.axonType}
              axonsEnabled={layer.axonsEnabled}
              onUpdate={onUpdate}
            />

            {/* Dendrites */}
            <div className="flex-1">
              <label className="font-medium flex items-center mb-2 text-[var(--text)]">
                <Toggle
                  checked={layer.dendritesEnabled}
                  onChange={() =>
                    onUpdate("dendritesEnabled", !layer.dendritesEnabled)
                  }
                  icons={false}
                  className="mr-2"
                />
                Dendrites
              </label>
              {layer.dendritesEnabled && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-1 text-[var(--text)]">Total Dendrites:</label>
                    <input
                      type="number"
                      className="w-full p-2 border rounded bg-[var(--background)] text-[var(--text)] border-[var(--secondary)]"
                      value={layer.dendrites}
                      onChange={(e) =>
                        onUpdate("dendrites", parseInt(e.target.value, 10))
                      }
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-[var(--text)]">Dendrite Type:</label>
                    <select
                      className="w-full p-2 border rounded bg-[var(--background)] text-[var(--text)] border-[var(--secondary)]"
                      value={layer.dendriteType}
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
          </div>

          {/* Variables */}
          <div className="flex space-x-4">
            {/* Membrane Potential */}
            <div className="flex-1">
              <label className="font-medium flex items-center mb-2 text-[var(--text)]">
                <Toggle
                  checked={layer.membranePotentialEnabled}
                  onChange={() =>
                    onUpdate("membranePotentialEnabled", !layer.membranePotentialEnabled)
                  }
                  icons={false}
                  className="mr-2"
                />
                Membrane Potential
              </label>
              {layer.membranePotentialEnabled && (
                <div>
                  <label className="block mb-1 text-[var(--text)]">Membrane Potential Value:</label>
                  <input
                    type="number"
                    className="w-full p-2 border rounded bg-[var(--background)] text-[var(--text)] border-[var(--secondary)]"
                    value={layer.membranePotential}
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
                  checked={layer.synapticConstantsEnabled}
                  onChange={() =>
                    onUpdate("synapticConstantsEnabled", !layer.synapticConstantsEnabled)
                  }
                  icons={false}
                  className="mr-2"
                />
                Synaptic Constants
              </label>
              {layer.synapticConstantsEnabled && (
                <div>
                  <label className="block mb-1 text-[var(--text)]">Synaptic Constants Value:</label>
                  <input
                    type="number"
                    className="w-full p-2 border rounded bg-[var(--background)] text-[var(--text)] border-[var(--secondary)]"
                    value={layer.synapticConstants}
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
                  checked={layer.synapticConnectionTypeEnabled}
                  onChange={() =>
                    onUpdate("synapticConnectionTypeEnabled", !layer.synapticConnectionTypeEnabled)
                  }
                  icons={false}
                  className="mr-2"
                />
                Synaptic Connection Type
              </label>
              {layer.synapticConnectionTypeEnabled && (
                <div>
                  <label className="block mb-1 text-[var(--text)]">Connection Type:</label>
                  <select
                    className="w-full p-2 border rounded bg-[var(--background)] text-[var(--text)] border-[var(--secondary)]"
                    value={layer.synapticConnectionType}
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

          {/* Delete Layer Button */}
          {showDeleteButton && onDelete && (
            <div className="flex justify-end">
              <button
                className="mt-4 bg-[var(--error)] text-white px-4 py-2 rounded hover:bg-opacity-90 transition-colors"
                onClick={onDelete}
              >
                Delete Layer
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LayerCard;
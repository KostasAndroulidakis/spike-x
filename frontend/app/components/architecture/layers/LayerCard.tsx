// components/architecture/layers/LayerCard.tsx

import React from 'react';
import Toggle from "react-toggle";
import "react-toggle/style.css";

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
    <div className="p-4 border border-gray-300 rounded">
      {/* Layer Header */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={onToggle}
      >
        <h2 className="text-lg font-semibold">{layer.name}</h2>
        <span className="text-gray-500">
          {isOpen ? "▲" : "▼"}
        </span>
      </div>

      {/* Layer Settings */}
      {isOpen && (
        <div className="mt-4 space-y-6">
          {/* Neurons & Synapses */}
          <div className="grid grid-cols-4 gap-4">
            {/* Total Neurons */}
            <div>
              <label className="block mb-1">Total Neurons:</label>
              <input
                type="number"
                className="w-full p-2 border rounded"
                value={layer.neurons}
                onChange={(e) =>
                  onUpdate("neurons", parseInt(e.target.value, 10))
                }
              />
            </div>
            {/* Neuron Type */}
            <div>
              <label className="block mb-1">Neuron Type:</label>
              <select
                className="w-full p-2 border rounded"
                value={layer.neuronType}
                onChange={(e) =>
                  onUpdate("neuronType", e.target.value)
                }
              >
                <option value="LIF">LIF</option>
                <option value="Izhikevich">Izhikevich</option>
                <option value="Hodgkin-Huxley">Hodgkin-Huxley</option>
              </select>
            </div>
            {/* Total Synapses */}
            <div>
              <label className="block mb-1">Total Synapses:</label>
              <input
                type="number"
                className="w-full p-2 border rounded"
                value={layer.synapses}
                onChange={(e) =>
                  onUpdate("synapses", parseInt(e.target.value, 10))
                }
              />
            </div>
            {/* Synapse Type */}
            <div>
              <label className="block mb-1">Synapse Type:</label>
              <select
                className="w-full p-2 border rounded"
                value={layer.synapseType}
                onChange={(e) =>
                  onUpdate("synapseType", e.target.value)
                }
              >
                <option value="STDP">STDP</option>
                <option value="R-STDP">R-STDP</option>
                <option value="Hodgkin-Huxley">Hodgkin-Huxley</option>
                <option value="AdEx">AdEx</option>
                <option value="LIF">LIF</option>
                <option value="SRM">SRM</option>
              </select>
            </div>
          </div>

          {/* Axons & Dendrites */}
          <div className="flex space-x-4">
            {/* Axons */}
            <div className="flex-1">
              <label className="font-medium flex items-center mb-2">
                <Toggle
                  checked={layer.axonsEnabled}
                  onChange={() =>
                    onUpdate("axonsEnabled", !layer.axonsEnabled)
                  }
                  icons={false}
                  className="mr-2"
                />
                Axons
              </label>
              {layer.axonsEnabled && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-1">Total Axons:</label>
                    <input
                      type="number"
                      className="w-full p-2 border rounded"
                      value={layer.axons}
                      onChange={(e) =>
                        onUpdate("axons", parseInt(e.target.value, 10))
                      }
                    />
                  </div>
                  <div>
                    <label className="block mb-1">Axon Type:</label>
                    <select
                      className="w-full p-2 border rounded"
                      value={layer.axonType}
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

            {/* Dendrites */}
            <div className="flex-1">
              <label className="font-medium flex items-center mb-2">
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
                    <label className="block mb-1">Total Dendrites:</label>
                    <input
                      type="number"
                      className="w-full p-2 border rounded"
                      value={layer.dendrites}
                      onChange={(e) =>
                        onUpdate("dendrites", parseInt(e.target.value, 10))
                      }
                    />
                  </div>
                  <div>
                    <label className="block mb-1">Dendrite Type:</label>
                    <select
                      className="w-full p-2 border rounded"
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
              <label className="font-medium flex items-center mb-2">
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
                  <label className="block mb-1">Membrane Potential Value:</label>
                  <input
                    type="number"
                    className="w-full p-2 border rounded"
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
              <label className="font-medium flex items-center mb-2">
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
                  <label className="block mb-1">Synaptic Constants Value:</label>
                  <input
                    type="number"
                    className="w-full p-2 border rounded"
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
              <label className="font-medium flex items-center mb-2">
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
                  <label className="block mb-1">Synaptic Connection Type:</label>
                  <select
                    className="w-full p-2 border rounded"
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
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
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
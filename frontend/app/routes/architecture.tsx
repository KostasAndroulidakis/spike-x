import { useState } from "react";
import Toggle from "react-toggle";
import "react-toggle/style.css";

export default function Architecture() {
  const initialLayers = [
    {
      name: "Input Layer",
      neurons: 10,
      neuronType: "LIF",
      synapses: 20,
      synapseType: "STDP",
      synapticConnectionType: "Excitation",
      axons: 10,
      axonType: "LIF",
      dendrites: 10,
      dendriteType: "Multi-Compartment Models",
      axonsEnabled: false,
      dendritesEnabled: false,
      membranePotentialEnabled: false,
      membranePotential: 0,
      synapticConstantsEnabled: false,
      synapticConstants: 0,
    },
    {
      name: "Output Layer",
      neurons: 10,
      neuronType: "LIF",
      synapses: 20,
      synapseType: "STDP",
      synapticConnectionType: "Excitation",
      axons: 10,
      axonType: "LIF",
      dendrites: 10,
      dendriteType: "Multi-Compartment Models",
      axonsEnabled: false,
      dendritesEnabled: false,
      membranePotentialEnabled: false,
      membranePotential: 0,
      synapticConstantsEnabled: false,
      synapticConstants: 0,
    },
  ];

  const [layers, setLayers] = useState(initialLayers);
  const [openLayers, setOpenLayers] = useState<boolean[]>(
    initialLayers.map(() => false)
  );

  // Add a new layer
  const addLayer = () => {
    const updatedLayers = [...layers];
    if (updatedLayers.length > 1) {
      updatedLayers[updatedLayers.length - 1].name = `Hidden Layer ${
        updatedLayers.length - 1
      }`;
    }

    updatedLayers.push({
      name: "Output Layer",
      neurons: 10,
      neuronType: "LIF",
      synapses: 20,
      synapseType: "STDP",
      synapticConnectionType: "Excitation",
      axons: 10,
      axonType: "LIF",
      dendrites: 10,
      dendriteType: "Multi-Compartment Models",
      axonsEnabled: false,
      dendritesEnabled: false,
      membranePotentialEnabled: false,
      membranePotential: 0,
      synapticConstantsEnabled: false,
      synapticConstants: 0,
    });

    setLayers(updatedLayers);
    setOpenLayers([...openLayers, false]);
  };

  // Update layer attributes
  const updateLayer = (index: number, key: string, value: any) => {
    const updatedLayers = [...layers];
    updatedLayers[index] = { ...updatedLayers[index], [key]: value };
    setLayers(updatedLayers);
  };

  // Delete a layer
  const deleteLayer = (index: number) => {
    if (layers.length <= 2) {
      alert("There must be at least two layers (Input and Output).");
      return;
    }

    const updatedLayers = layers.filter((_, i) => i !== index);
    const updatedOpenLayers = openLayers.filter((_, i) => i !== index);

    if (index === layers.length - 1) {
      updatedLayers[updatedLayers.length - 1].name = "Output Layer";
    }

    setLayers(updatedLayers);
    setOpenLayers(updatedOpenLayers);
  };

  // Toggle layer open/close
  const toggleLayer = (index: number) => {
    const updatedOpenLayers = [...openLayers];
    updatedOpenLayers[index] = !updatedOpenLayers[index];
    setOpenLayers(updatedOpenLayers);
  };

  return (
    <div className="p-4 max-w-screen-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Architecture</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        onClick={addLayer}
      >
        Add Layer
      </button>

      <div className="space-y-6">
        {layers.map((layer, index) => (
          <div
            key={index}
            className="p-4 border border-gray-300 rounded"
          >
            {/* Layer Header */}
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleLayer(index)}
            >
              <h2 className="text-lg font-semibold">{layer.name}</h2>
              <span className="text-gray-500">
                {openLayers[index] ? "▲" : "▼"}
              </span>
            </div>

            {/* Delete Button */}
            {index !== 0 && index !== layers.length - 1 && (
              <button
                className="mt-2 bg-red-500 text-white px-2 py-1 rounded"
                onClick={() => deleteLayer(index)}
              >
                Delete Layer
              </button>
            )}

            {/* Layer Settings */}
            {openLayers[index] && (
              <div className="mt-4 space-y-6">
                {/* 1st Line: Neurons */}
                <div>
                  <h3 className="font-medium mb-2">Neurons</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-1">Total Neurons:</label>
                      <input
                        type="number"
                        className="w-full p-2 border rounded"
                        value={layer.neurons}
                        onChange={(e) =>
                          updateLayer(index, "neurons", parseInt(e.target.value, 10))
                        }
                      />
                    </div>
                    <div>
                      <label className="block mb-1">Neuron Type:</label>
                      <select
                        className="w-full p-2 border rounded"
                        value={layer.neuronType}
                        onChange={(e) =>
                          updateLayer(index, "neuronType", e.target.value)
                        }
                      >
                        <option value="LIF">LIF</option>
                        <option value="Izhikevich">Izhikevich</option>
                        <option value="Hodgkin-Huxley">Hodgkin-Huxley</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* 2nd Line: Synapses */}
                <div>
                  <h3 className="font-medium mb-2">Synapses</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block mb-1">Total Synapses:</label>
                      <input
                        type="number"
                        className="w-full p-2 border rounded"
                        value={layer.synapses}
                        onChange={(e) =>
                          updateLayer(index, "synapses", parseInt(e.target.value, 10))
                        }
                      />
                    </div>
                    <div>
                      <label className="block mb-1">Synapse Type:</label>
                      <select
                        className="w-full p-2 border rounded"
                        value={layer.synapseType}
                        onChange={(e) =>
                          updateLayer(index, "synapseType", e.target.value)
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
                    <div>
                      <label className="block mb-1">Synaptic Connection Type:</label>
                      <select
                        className="w-full p-2 border rounded"
                        value={layer.synapticConnectionType}
                        onChange={(e) =>
                          updateLayer(index, "synapticConnectionType", e.target.value)
                        }
                      >
                        <option value="Excitation">Excitation</option>
                        <option value="Inhibition">Inhibition</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* 3rd Line: Axons & Dendrites */}
                <div>
                  <h3 className="font-medium mb-2">Axons & Dendrites</h3>
                  <div className="flex space-x-4">
                    {/* Axons */}
                    <div className="flex-1">
                      <label className="font-medium flex items-center mb-2">
                        <Toggle
                          checked={layer.axonsEnabled}
                          onChange={() =>
                            updateLayer(index, "axonsEnabled", !layer.axonsEnabled)
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
                                updateLayer(index, "axons", parseInt(e.target.value, 10))
                              }
                            />
                          </div>
                          <div>
                            <label className="block mb-1">Axon Type:</label>
                            <select
                              className="w-full p-2 border rounded"
                              value={layer.axonType}
                              onChange={(e) =>
                                updateLayer(index, "axonType", e.target.value)
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
                            updateLayer(index, "dendritesEnabled", !layer.dendritesEnabled)
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
                                updateLayer(index, "dendrites", parseInt(e.target.value, 10))
                              }
                            />
                          </div>
                          <div>
                            <label className="block mb-1">Dendrite Type:</label>
                            <select
                              className="w-full p-2 border rounded"
                              value={layer.dendriteType}
                              onChange={(e) =>
                                updateLayer(index, "dendriteType", e.target.value)
                              }
                            >
                              <option value="Multi-Compartment Models">
                                Multi-Compartment Models
                              </option>
                              <option value="NLIF">
                                Non-linear Integrate-and-Fire (NLIF)
                              </option>
                              <option value="AdEx">
                                AdEx Model (Adaptive Exponential Integrate-and-Fire)
                              </option>
                              <option value="Theta Neuron Model">
                                Theta Neuron Model
                              </option>
                              <option value="Branch-Specific Plasticity Models">
                                Branch-Specific Plasticity Models
                              </option>
                            </select>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* 4th Line: Membrane Potential & Synaptic Constants */}
                <div>
                  <h3 className="font-medium mb-2">Variables</h3>
                  <div className="flex space-x-4">
                    {/* Membrane Potential */}
                    <div className="flex-1">
                      <label className="font-medium flex items-center mb-2">
                        <Toggle
                          checked={layer.membranePotentialEnabled}
                          onChange={() =>
                            updateLayer(
                              index,
                              "membranePotentialEnabled",
                              !layer.membranePotentialEnabled
                            )
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
                              updateLayer(index, "membranePotential", parseFloat(e.target.value))
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
                            updateLayer(
                              index,
                              "synapticConstantsEnabled",
                              !layer.synapticConstantsEnabled
                            )
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
                              updateLayer(index, "synapticConstants", parseFloat(e.target.value))
                            }
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

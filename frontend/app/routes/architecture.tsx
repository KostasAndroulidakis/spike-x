import { useState } from "react";

export default function Architecture() {
  const [layers, setLayers] = useState([
    {
      name: "Input Layer",
      neurons: 10,
      neuronType: "LIF",
      synapses: 20,
      synapseType: "STDP",
      axons: 10,
      axonType: "LIF",
      dendrites: 10,
      dendriteType: "Multi-Compartment Models",
    },
    {
      name: "Output Layer",
      neurons: 10,
      neuronType: "LIF",
      synapses: 20,
      synapseType: "STDP",
      axons: 10,
      axonType: "LIF",
      dendrites: 10,
      dendriteType: "Multi-Compartment Models",
    },
  ]);

  // Προσθήκη νέου layer
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
      axons: 10,
      axonType: "LIF",
      dendrites: 10,
      dendriteType: "Multi-Compartment Models",
    });

    setLayers(updatedLayers);
  };

  // Ενημέρωση χαρακτηριστικών layer
  const updateLayer = (index: number, key: string, value: any) => {
    const updatedLayers = [...layers];
    updatedLayers[index] = { ...updatedLayers[index], [key]: value };
    setLayers(updatedLayers);
  };

  // Διαγραφή layer
  const deleteLayer = (index: number) => {
    if (layers.length <= 2) {
      alert("There must be at least two layers (Input and Output).");
      return;
    }

    const updatedLayers = layers.filter((_, i) => i !== index);

    if (index === layers.length - 1) {
      updatedLayers[updatedLayers.length - 1].name = "Output Layer";
    }

    setLayers(updatedLayers);
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

      <div className="space-y-4">
        {layers.map((layer, index) => (
          <div
            key={index}
            className="p-4 border border-gray-300 rounded space-y-2"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">{layer.name}</h2>
              {index !== 0 && index !== layers.length - 1 && (
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => deleteLayer(index)}
                >
                  Delete Layer
                </button>
              )}
            </div>

            <div className="grid grid-cols-4 gap-4">
              {/* Total Neurons */}
              <div>
                <label className="block mb-1">Total Neurons:</label>
                <input
                  type="number"
                  className="w-full p-1 border rounded"
                  value={layer.neurons}
                  onChange={(e) =>
                    updateLayer(index, "neurons", parseInt(e.target.value, 10))
                  }
                />
              </div>

              {/* Neuron Type */}
              <div>
                <label className="block mb-1">Neuron Type:</label>
                <select
                  className="w-full p-1 border rounded"
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

              {/* Total Synapses */}
              <div>
                <label className="block mb-1">Total Synapses:</label>
                <input
                  type="number"
                  className="w-full p-1 border rounded"
                  value={layer.synapses}
                  onChange={(e) =>
                    updateLayer(index, "synapses", parseInt(e.target.value, 10))
                  }
                />
              </div>

              {/* Synapse Type */}
              <div>
                <label className="block mb-1">Synapse Type:</label>
                <select
                  className="w-full p-1 border rounded"
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

              {/* Total Axons */}
              <div>
                <label className="block mb-1">Total Axons:</label>
                <input
                  type="number"
                  className="w-full p-1 border rounded"
                  value={layer.axons}
                  onChange={(e) =>
                    updateLayer(index, "axons", parseInt(e.target.value, 10))
                  }
                />
              </div>

              {/* Axon Type */}
              <div>
                <label className="block mb-1">Axon Type:</label>
                <select
                  className="w-full p-1 border rounded"
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

              {/* Total Dendrites */}
              <div>
                <label className="block mb-1">Total Dendrites:</label>
                <input
                  type="number"
                  className="w-full p-1 border rounded"
                  value={layer.dendrites}
                  onChange={(e) =>
                    updateLayer(index, "dendrites", parseInt(e.target.value, 10))
                  }
                />
              </div>

              {/* Dendrite Type */}
              <div>
                <label className="block mb-1">Dendrite Type:</label>
                <select
                  className="w-full p-1 border rounded"
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
          </div>
        ))}
      </div>
    </div>
  );
}

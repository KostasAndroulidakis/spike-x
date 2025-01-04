import { useState } from "react";

export default function Architecture() {
  // State για την αρχιτεκτονική του SNN
  const [layers, setLayers] = useState([
    {
      name: "Input Layer",
      neurons: 10,
      subpopulations: [{ neurons: 10, neuronType: "LIF" }],
    },
  ]);

  // Προσθήκη νέου layer
  const addLayer = () => {
    const newLayer = {
      name: `Hidden Layer ${layers.length}`,
      neurons: 10,
      subpopulations: [{ neurons: 10, neuronType: "LIF" }],
    };
    setLayers([...layers, newLayer]);
  };

  // Ενημέρωση χαρακτηριστικών layer
  const updateLayer = (index: number, key: string, value: any) => {
    const updatedLayers = [...layers];
    updatedLayers[index] = { ...updatedLayers[index], [key]: value };
    setLayers(updatedLayers);
  };

  // Ενημέρωση χαρακτηριστικών subpopulation
  const updateSubpopulation = (
    layerIndex: number,
    subIndex: number,
    key: string,
    value: any
  ) => {
    const updatedLayers = [...layers];
    updatedLayers[layerIndex].subpopulations[subIndex] = {
      ...updatedLayers[layerIndex].subpopulations[subIndex],
      [key]: value,
    };
    setLayers(updatedLayers);
  };

  // Προσθήκη νέου subpopulation
  const addSubpopulation = (layerIndex: number) => {
    const updatedLayers = [...layers];
    updatedLayers[layerIndex].subpopulations.push({
      neurons: 10,
      neuronType: "LIF",
    });
    setLayers(updatedLayers);
  };

  // Διαγραφή layer
  const deleteLayer = (index: number) => {
    const updatedLayers = layers.filter((_, i) => i !== index);
    setLayers(updatedLayers);
  };

  // Διαγραφή subpopulation
  const deleteSubpopulation = (layerIndex: number, subIndex: number) => {
    const updatedLayers = [...layers];
    updatedLayers[layerIndex].subpopulations.splice(subIndex, 1);
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
            {/* Layer Header */}
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">{layer.name}</h2>
              <button
                className="bg-red-500 text-white px-2 py-1 rounded"
                onClick={() => deleteLayer(index)}
              >
                Delete Layer
              </button>
            </div>

            {/* Layer Details */}
            <div className="grid grid-cols-2 gap-4">
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
            </div>

            {/* Subpopulations */}
            <div className="space-y-2 mt-4">
              <h3 className="font-semibold">Subpopulations</h3>
              {layer.subpopulations.map((sub, subIndex) => (
                <div
                  key={subIndex}
                  className="p-2 border border-gray-200 rounded flex items-center space-x-4"
                >
                  <div>
                    <label className="block mb-1">Neurons:</label>
                    <input
                      type="number"
                      className="w-20 p-1 border rounded"
                      value={sub.neurons}
                      onChange={(e) =>
                        updateSubpopulation(
                          index,
                          subIndex,
                          "neurons",
                          parseInt(e.target.value, 10)
                        )
                      }
                    />
                  </div>
                  <div>
                    <label className="block mb-1">Neuron Type:</label>
                    <select
                      className="w-32 p-1 border rounded"
                      value={sub.neuronType}
                      onChange={(e) =>
                        updateSubpopulation(
                          index,
                          subIndex,
                          "neuronType",
                          e.target.value
                        )
                      }
                    >
                      <option value="LIF">LIF</option>
                      <option value="Izhikevich">Izhikevich</option>
                      <option value="Hodgkin-Huxley">Hodgkin-Huxley</option>
                    </select>
                  </div>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded"
                    onClick={() => deleteSubpopulation(index, subIndex)}
                  >
                    Delete
                  </button>
                </div>
              ))}
              <button
                className="bg-green-500 text-white px-4 py-2 rounded mt-2"
                onClick={() => addSubpopulation(index)}
              >
                Add Subpopulation
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

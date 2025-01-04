import { useState } from "react";

export default function Architecture() {
  // State για την αρχιτεκτονική του SNN
  const [layers, setLayers] = useState([
    { name: "Input Layer", neurons: 10, neuronType: "LIF", subpopulations: [] },
  ]);

  // Προσθήκη νέου layer
  const addLayer = () => {
    const newLayer = {
      name: `Hidden Layer ${layers.length}`,
      neurons: 10,
      neuronType: "LIF",
      subpopulations: [],
    };
    setLayers([...layers, newLayer]);
  };

  // Ενημέρωση χαρακτηριστικών layer
  const updateLayer = (index: number, key: string, value: any) => {
    const updatedLayers = [...layers];
    updatedLayers[index] = { ...updatedLayers[index], [key]: value };
    setLayers(updatedLayers);
  };

  // Διαγραφή layer
  const deleteLayer = (index: number) => {
    const updatedLayers = layers.filter((_, i) => i !== index);
    setLayers(updatedLayers);
  };

  return (
    <div className="p-4">
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
              <button
                className="bg-red-500 text-white px-2 py-1 rounded"
                onClick={() => deleteLayer(index)}
              >
                Delete
              </button>
            </div>

            <div className="flex flex-col space-y-2">
              <label>
                Neurons:
                <input
                  type="number"
                  className="ml-2 p-1 border rounded"
                  value={layer.neurons}
                  onChange={(e) =>
                    updateLayer(index, "neurons", parseInt(e.target.value, 10))
                  }
                />
              </label>

              <label>
                Neuron Type:
                <select
                  className="ml-2 p-1 border rounded"
                  value={layer.neuronType}
                  onChange={(e) => updateLayer(index, "neuronType", e.target.value)}
                >
                  <option value="LIF">LIF</option>
                  <option value="Izhikevich">Izhikevich</option>
                  <option value="Hodgkin-Huxley">Hodgkin-Huxley</option>
                </select>
              </label>

              <label>
                Subpopulations:
                <input
                  type="text"
                  className="ml-2 p-1 border rounded"
                  placeholder="Comma-separated (e.g., 5,5)"
                  value={layer.subpopulations.join(",")}
                  onChange={(e) =>
                    updateLayer(
                      index,
                      "subpopulations",
                      e.target.value.split(",").map(Number)
                    )
                  }
                />
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

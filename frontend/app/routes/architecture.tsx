import { useState } from "react";
import LayerCard from "../components/architecture/layers/LayerCard";

export default function Architecture() {
  const initialLayers = [
    {
      name: "Input Layer",
      neurons: 10,
      neuronType: "LIF",
      synapses: 20,
      synapseType: "STDP",
      synapticConnectionType: "Excitation",
      synapticConnectionTypeEnabled: false,
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
      synapticConnectionTypeEnabled: false,
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
      synapticConnectionTypeEnabled: false,
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

  const updateLayer = (index: number, key: string, value: any) => {
    const updatedLayers = [...layers];
    updatedLayers[index] = { ...updatedLayers[index], [key]: value };
    setLayers(updatedLayers);
  };

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

  const toggleLayer = (index: number) => {
    const updatedOpenLayers = [...openLayers];
    updatedOpenLayers[index] = !updatedOpenLayers[index];
    setOpenLayers(updatedOpenLayers);
  };

  return (
    <div className="p-4 max-w-screen-lg mx-auto">
      <div className="space-y-6">
        {layers.map((layer, index) => (
          <LayerCard
            key={index}
            layer={layer}
            isOpen={openLayers[index]}
            onToggle={() => toggleLayer(index)}
            onUpdate={(key, value) => updateLayer(index, key, value)}
            showDeleteButton={index !== 0 && index !== layers.length - 1}
            onDelete={
              index !== 0 && index !== layers.length - 1
                ? () => deleteLayer(index)
                : undefined
            }
          />
        ))}
      </div>

      <div className="flex justify-center">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
          onClick={addLayer}
        >
          Add Layer
        </button>
      </div>
    </div>
  );
}
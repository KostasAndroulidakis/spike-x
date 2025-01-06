import { useState } from "react";

interface Layer {
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
}

const createDefaultLayer = (name: string): Layer => ({
  name,
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

const initialLayers = [
  createDefaultLayer("Input Layer"),
  createDefaultLayer("Output Layer"),
];

export const useLayerManager = () => {
  const [layers, setLayers] = useState<Layer[]>(initialLayers);
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

    updatedLayers.push(createDefaultLayer("Output Layer"));
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

  return {
    layers,
    openLayers,
    addLayer,
    updateLayer,
    deleteLayer,
    toggleLayer,
  };
};

export type { Layer };
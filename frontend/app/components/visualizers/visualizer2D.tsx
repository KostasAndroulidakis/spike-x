import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { 
  useThreeSetup 
} from "../../hooks/visualizer/useThreeSetup";
import {
  Layer as LayerInterface,
  createNeuron,
  createConnection,
  getThemeColor,
  clearScene
} from "../../hooks/visualizer/visualizerUtils";

interface NetworkLayer {
  name: string;
  neurons: number;
  neuronType: string;
  synapses: number;
  synapseType: string;
  synapticConnectionType: string; // "Excitation" or "Inhibition"
  axons: number;
  axonType: string;
  dendrites: number;
  dendriteType: string;
  axonsEnabled: boolean;
  dendritesEnabled: boolean;
  membranePotentialEnabled: boolean;
  membranePotential: number;
  synapticConstantsEnabled: boolean;
  synapticConstant: number;
}

interface Visualizer2DProps {
  layers: NetworkLayer[];
}

/**
 * 2D visualization of neural network architecture
 * Uses Three.js to render neurons and connections
 */
export function Visualizer2D({ layers }: Visualizer2DProps) {
  // Use the shared Three.js setup hook
  const { scene, camera, containerRef, animate } = useThreeSetup({
    cameraPosition: [0, 0, 100],
    backgroundColor: getThemeColor('--visualizer-bg')
  });

  // Reference for animation frame
  const animationRef = useRef<number | null>(null);

  // Effect to render the network when layers change
  useEffect(() => {
    if (!scene) return;

    // Clear any existing objects from the scene
    clearScene(scene);

    // Store neuron positions for connecting synapses
    const neuronPositions: THREE.Vector3[][] = [];

    const layerSpacing = 30; // Space between layers
    const neuronSpacing = 10; // Space between neurons in a layer

    // Create neurons for each layer
    layers.forEach((layer, layerIndex) => {
      const neuronsInLayer = layer.neurons;
      const layerX = layerIndex * layerSpacing - ((layers.length - 1) * layerSpacing) / 2;
      neuronPositions[layerIndex] = [];

      for (let i = 0; i < neuronsInLayer; i++) {
        const neuronY = (i - (neuronsInLayer - 1) / 2) * neuronSpacing;
        const neuronZ = 0;

        // Determine neuron color based on layer position
        let colorVar: string;
        if (layerIndex === 0) {
          colorVar = '--visualizer-neuron-input'; // Input Layer
        } else if (layerIndex === layers.length - 1) {
          colorVar = '--visualizer-neuron-output'; // Output Layer
        } else {
          colorVar = '--visualizer-neuron-hidden'; // Hidden layers
        }

        // Create the neuron using the utility function
        const neuronColor = getThemeColor(colorVar);
        const neuron = createNeuron(scene, [layerX, neuronY, neuronZ], neuronColor, 2);
        
        // Store position for connections
        neuronPositions[layerIndex].push(neuron.position);
      }
    });

    // Create connections between layers
    layers.forEach((layer, layerIndex) => {
      if (layerIndex === layers.length - 1) return; // Skip last layer

      const currentLayerNeurons = neuronPositions[layerIndex];
      const nextLayerNeurons = neuronPositions[layerIndex + 1];

      currentLayerNeurons.forEach((startPos) => {
        const synapses = layer.synapses;
        for (let s = 0; s < synapses; s++) {
          const targetNeuron = nextLayerNeurons[Math.floor(Math.random() * nextLayerNeurons.length)];
          
          // Determine connection color based on synapse type
          const colorVar = layer.synapticConnectionType === "Excitation" 
            ? '--visualizer-synapse-excitatory'
            : '--visualizer-synapse-inhibitory';
            
          const connectionColor = getThemeColor(colorVar);
          
          // Create the connection using the utility function
          createConnection(
            scene,
            [startPos.x, startPos.y, startPos.z],
            [targetNeuron.x, targetNeuron.y, targetNeuron.z],
            connectionColor
          );
        }
      });
    });

    // Start animation loop
    const runAnimation = () => {
      animate();
      animationRef.current = requestAnimationFrame(runAnimation);
    };
    
    runAnimation();

    // Cleanup animation on unmount or when layers change
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [scene, layers, animate]);

  return (
    <div
      ref={containerRef}
      className="w-full h-[600px] border border-[var(--visualizer-border)] rounded-lg"
    />
  );
}

export default Visualizer2D;

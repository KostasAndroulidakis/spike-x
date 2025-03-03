import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { 
  useThreeSetup 
} from "../../hooks/visualizer/useThreeSetup";
import {
  createNeuron,
  getThemeColor,
  clearScene,
  generateNeuronGrid
} from "../../hooks/visualizer/visualizerUtils";

interface NetworkLayer {
  count: number;
  position: number;
  size: number;
  type: 'input' | 'hidden' | 'output';
}

interface Visualizer3DProps {
  customLayers?: NetworkLayer[];
}

/**
 * 3D visualization of neural network architecture
 * Uses Three.js to render neurons and connections in 3D space
 */
export function Visualizer3D({ customLayers }: Visualizer3DProps) {
  // Use the shared Three.js setup hook
  const { scene, camera, containerRef, animate } = useThreeSetup({
    cameraPosition: [0, 0, 20],
    backgroundColor: getThemeColor('--visualizer-bg')
  });

  // Reference for animation frame
  const animationRef = useRef<number | null>(null);

  // Effect to render the network
  useEffect(() => {
    if (!scene) return;

    // Clear any existing objects from the scene
    clearScene(scene);

    // Define default layers if none provided
    const layers: NetworkLayer[] = customLayers || [
      { count: 784, position: -10, size: 10, type: 'input' },
      { count: 128, position: -5, size: 5, type: 'hidden' },
      { count: 64, position: 0, size: 4, type: 'hidden' },
      { count: 10, position: 5, size: 2, type: 'output' }
    ];

    // Store all neurons for connections
    const layerNeurons: THREE.Mesh[][] = [];

    // Create each layer
    layers.forEach((layer, layerIndex) => {
      const neuronSize = 0.1; // Small neurons for 3D view
      
      // Choose color based on layer type
      let colorVar: string;
      if (layer.type === 'input') {
        colorVar = '--visualizer-neuron-input';
      } else if (layer.type === 'output') {
        colorVar = '--visualizer-neuron-output';
      } else {
        colorVar = '--visualizer-neuron-hidden';
      }
      
      const neuronColor = getThemeColor(colorVar);
      const layerMeshes: THREE.Mesh[] = [];
      
      // Create layer neurons
      const side = Math.ceil(Math.sqrt(layer.count));
      const spacing = layer.size / side;
      
      for (let i = 0; i < layer.count; i++) {
        const row = Math.floor(i / side);
        const col = i % side;
        
        const x = layer.position;
        const y = (row - side / 2) * spacing;
        const z = (col - side / 2) * spacing;
        
        const neuron = createNeuron(scene, [x, y, z], neuronColor, neuronSize);
        layerMeshes.push(neuron);
      }
      
      layerNeurons.push(layerMeshes);
    });
    
    // Connect layers with lines
    for (let i = 0; i < layerNeurons.length - 1; i++) {
      const currentLayer = layerNeurons[i];
      const nextLayer = layerNeurons[i + 1];
      
      // Create efficient connections using BufferGeometry
      const lineGeometry = new THREE.BufferGeometry();
      const positions = new Float32Array(currentLayer.length * nextLayer.length * 6);
      let index = 0;
      
      currentLayer.forEach((neuron1) => {
        nextLayer.forEach((neuron2) => {
          positions[index++] = neuron1.position.x;
          positions[index++] = neuron1.position.y;
          positions[index++] = neuron1.position.z;
          
          positions[index++] = neuron2.position.x;
          positions[index++] = neuron2.position.y;
          positions[index++] = neuron2.position.z;
        });
      });
      
      lineGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      const lineMaterial = new THREE.LineBasicMaterial({ 
        color: getThemeColor('--visualizer-connection'),
        opacity: 0.3,
        transparent: true
      });
      
      const lineMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
      scene.add(lineMesh);
    }
    
    // Set camera position for side view
    camera.position.set(0, 0, 20);
    camera.lookAt(0, 0, 0);
    camera.rotateY(-Math.PI / 2);
    
    // Start animation loop
    const runAnimation = () => {
      animate();
      animationRef.current = requestAnimationFrame(runAnimation);
    };
    
    runAnimation();
    
    // Cleanup animation on unmount
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [scene, animate, customLayers]);

  return (
    <div
      ref={containerRef}
      className="w-full h-[600px] border border-[var(--visualizer-border)] rounded-lg"
    />
  );
}

export default Visualizer3D;

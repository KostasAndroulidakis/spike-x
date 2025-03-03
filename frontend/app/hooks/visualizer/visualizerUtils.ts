import * as THREE from 'three';

// Define common interfaces
export interface Layer {
  id: string;
  name: string;
  type: 'input' | 'hidden' | 'output';
  neurons: number;
  position?: [number, number, number];
}

export interface Connection {
  sourceLayer: string;
  targetLayer: string;
  type: 'excitatory' | 'inhibitory';
}

// Utility function to get colors from CSS variables
export function getThemeColor(colorVar: string): string {
  return getComputedStyle(document.documentElement).getPropertyValue(colorVar).trim();
}

// Create a neuron sphere with given parameters
export function createNeuron(
  scene: THREE.Scene,
  position: [number, number, number],
  color: string,
  size: number = 0.2
): THREE.Mesh {
  const geometry = new THREE.SphereGeometry(size, 16, 16);
  const material = new THREE.MeshStandardMaterial({
    color: new THREE.Color(color),
    roughness: 0.5,
    metalness: 0.2,
  });
  
  const neuron = new THREE.Mesh(geometry, material);
  neuron.position.set(...position);
  scene.add(neuron);
  
  return neuron;
}

// Create a connection line between two points
export function createConnection(
  scene: THREE.Scene,
  start: [number, number, number],
  end: [number, number, number],
  color: string,
  width: number = 0.05
): THREE.Line {
  const points = [
    new THREE.Vector3(...start),
    new THREE.Vector3(...end),
  ];
  
  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const material = new THREE.LineBasicMaterial({ color: new THREE.Color(color), linewidth: width });
  
  const line = new THREE.Line(geometry, material);
  scene.add(line);
  
  return line;
}

// Generate a grid of neuron positions for a layer
export function generateNeuronGrid(
  layer: Layer,
  gridSize: number,
  spacing: number
): [number, number, number][] {
  const positions: [number, number, number][] = [];
  const basePosition = layer.position || [0, 0, 0];
  
  // Calculate grid dimensions
  const gridDimension = Math.ceil(Math.sqrt(layer.neurons));
  const offset = (gridDimension - 1) * spacing / 2;
  
  for (let i = 0; i < layer.neurons; i++) {
    const row = Math.floor(i / gridDimension);
    const col = i % gridDimension;
    
    const x = basePosition[0] + (col * spacing - offset);
    const y = basePosition[1] + (row * spacing - offset);
    const z = basePosition[2];
    
    positions.push([x, y, z]);
  }
  
  return positions;
}

// Position layers in a network
export function positionLayers(layers: Layer[], spacing: number = 5): Layer[] {
  return layers.map((layer, index) => ({
    ...layer,
    position: [index * spacing - (layers.length - 1) * spacing / 2, 0, 0]
  }));
}

// Clear all objects from a scene
export function clearScene(scene: THREE.Scene): void {
  while (scene.children.length > 0) {
    scene.remove(scene.children[0]);
  }
}
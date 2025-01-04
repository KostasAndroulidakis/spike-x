// spike-x/frontend/app/components/visualizer.tsx

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

interface Layer {
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

interface VisualizerProps {
  layers: Layer[];
}

const Visualizer: React.FC<VisualizerProps> = ({ layers }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // === THREE.JS SETUP ===
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0);

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 50, 100);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);

    // OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
    directionalLight.position.set(0, 1, 1);
    scene.add(directionalLight);

    // Resize Handler
    const handleResize = () => {
      if (currentMount) {
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
        camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
        camera.updateProjectionMatrix();
      }
    };
    window.addEventListener("resize", handleResize);

    // === VISUALIZATION LOGIC ===
    // Store neuron positions for connecting synapses
    const neuronPositions: THREE.Vector3[][] = [];

    const layerSpacing = 30; // Space between layers
    const neuronSpacing = 10; // Space between neurons in a layer

    layers.forEach((layer, layerIndex) => {
      const neuronsInLayer = layer.neurons;
      const layerX = layerIndex * layerSpacing - ((layers.length - 1) * layerSpacing) / 2;
      neuronPositions[layerIndex] = [];

      for (let i = 0; i < neuronsInLayer; i++) {
        const neuronY = (i - (neuronsInLayer - 1) / 2) * neuronSpacing;
        const neuronZ = 0;

        // Neuron Geometry and Material
        const geometry = new THREE.SphereGeometry(2, 16, 16);
        let materialColor = 0x0000ff; // Default blue for hidden layers

        if (layerIndex === 0) {
          materialColor = 0x00ff00; // Green for Input Layer
        } else if (layerIndex === layers.length - 1) {
          materialColor = 0xff0000; // Red for Output Layer
        }

        const material = new THREE.MeshStandardMaterial({ color: materialColor });
        const neuron = new THREE.Mesh(geometry, material);
        neuron.position.set(layerX, neuronY, neuronZ);
        scene.add(neuron);

        // Store position
        neuronPositions[layerIndex].push(neuron.position);
      }
    });

    // Connect Synapses
    layers.forEach((layer, layerIndex) => {
      if (layerIndex === layers.length - 1) return; // Skip last layer

      const currentLayerNeurons = neuronPositions[layerIndex];
      const nextLayerNeurons = neuronPositions[layerIndex + 1];

      currentLayerNeurons.forEach((startPos) => {
        const synapses = layer.synapses;
        for (let s = 0; s < synapses; s++) {
          const targetNeuron = nextLayerNeurons[Math.floor(Math.random() * nextLayerNeurons.length)];
          const points = [startPos, targetNeuron];

          const materialColor = layer.synapticConnectionType === "Excitation" ? 0x00ff00 : 0xff0000;

          const material = new THREE.LineBasicMaterial({ color: materialColor, opacity: 0.5 });
          const geometry = new THREE.BufferGeometry().setFromPoints(points);
          const line = new THREE.Line(geometry, material);
          scene.add(line);
        }
      });
    });

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup on Unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      currentMount.removeChild(renderer.domElement);
    };
  }, [layers]);

  return (
    <div
      ref={mountRef}
      style={{ width: "100%", height: "600px", border: "1px solid #ccc", borderRadius: "8px" }}
    />
  );
};

export default Visualizer;

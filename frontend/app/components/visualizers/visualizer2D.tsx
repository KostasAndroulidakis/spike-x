// spike-x/frontend/app/components/visualizers/visualizer2d.tsx

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

interface visualizer2dProps {
  layers: Layer[];
}

const visualizer2d: React.FC<visualizer2dProps> = ({ layers }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // === THREE.JS SETUP ===
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Get CSS variables for theming
    const getThemeColor = (varName: string): number => {
      const color = getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
      // Convert CSS hex to THREE.js hex
      return parseInt(color.replace('#', '0x'));
    };

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(getThemeColor('--visualizer-bg'));

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
    const lightColor = getThemeColor('--visualizer-light');
    const ambientLight = new THREE.AmbientLight(lightColor, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(lightColor, 0.6);
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
        let materialColor: number;

        if (layerIndex === 0) {
          materialColor = getThemeColor('--visualizer-neuron-input'); // Input Layer
        } else if (layerIndex === layers.length - 1) {
          materialColor = getThemeColor('--visualizer-neuron-output'); // Output Layer
        } else {
          materialColor = getThemeColor('--visualizer-neuron-hidden'); // Hidden layers
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

          const materialColor = layer.synapticConnectionType === "Excitation" 
            ? getThemeColor('--visualizer-synapse-excitatory')
            : getThemeColor('--visualizer-synapse-inhibitory');

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
      className="w-full h-[600px] border border-[var(--visualizer-border)] rounded-lg"
    />
  );
};

export default visualizer2d;

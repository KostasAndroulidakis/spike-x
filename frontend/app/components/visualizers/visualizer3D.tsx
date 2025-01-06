// spike-x/frontend/app/components/visualizers/visualizer2d.tsx

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const visualizer3d: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Προσθήκη OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    const geometry = new THREE.SphereGeometry(0.1, 8, 8); // Χαμηλότερη ανάλυση
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

    // Λειτουργία για δημιουργία στρώσεων ως πλέγμα
    const createLayer = (count: number, x: number, gridSize: number) => {
      const layer: THREE.Mesh[] = [];
      const side = Math.ceil(Math.sqrt(count)); // Υπολογισμός πλευράς τετραγώνου
      const spacing = gridSize / side; // Απόσταση μεταξύ νευρώνων
      for (let i = 0; i < count; i++) {
        const row = Math.floor(i / side); // Σειρά
        const col = i % side; // Στήλη
        const y = (row - side / 2) * spacing; // Θέση στον άξονα y
        const z = (col - side / 2) * spacing; // Θέση στον άξονα z
        const neuron = new THREE.Mesh(geometry, material);
        neuron.position.set(x, y, z);
        scene.add(neuron);
        layer.push(neuron);
      }
      return layer;
    };

    // Δημιουργία στρώσεων ως τετράγωνα
    const inputLayer = createLayer(784, -10, 10); // Input Layer
    const hiddenLayer1 = createLayer(128, -5, 5); // Hidden Layer 1
    const hiddenLayer2 = createLayer(64, 0, 4); // Hidden Layer 2
    const outputLayer = createLayer(10, 5, 2); // Output Layer

    const layers = [inputLayer, hiddenLayer1, hiddenLayer2, outputLayer];

    // Δημιουργία γραμμών με BufferGeometry
    const connectLayers = (layer1: THREE.Mesh[], layer2: THREE.Mesh[]) => {
      const lineGeometry = new THREE.BufferGeometry();
      const positions = new Float32Array(layer1.length * layer2.length * 6);
      let index = 0;

      layer1.forEach((neuron1) => {
        layer2.forEach((neuron2) => {
          positions[index++] = neuron1.position.x;
          positions[index++] = neuron1.position.y;
          positions[index++] = neuron1.position.z;

          positions[index++] = neuron2.position.x;
          positions[index++] = neuron2.position.y;
          positions[index++] = neuron2.position.z;
        });
      });

      lineGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
      const lineMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
      scene.add(lineMesh);
    };

    connectLayers(inputLayer, hiddenLayer1);
    connectLayers(hiddenLayer1, hiddenLayer2);
    connectLayers(hiddenLayer2, outputLayer);

    // Τοποθέτηση κάμερας για πλάγια όψη
    camera.position.set(0, 0, 20); // Τοποθέτηση κάμερας στον άξονα z
    camera.lookAt(0, 0, 0); // Εστίαση στο κέντρο του δικτύου

    // Περιστροφή 90 μοιρών γύρω από τον άξονα y
    camera.rotateY(-Math.PI / 2);

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} />;
};

export default visualizer3d;

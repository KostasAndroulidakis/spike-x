import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

interface ThreeSetupOptions {
  cameraPosition?: [number, number, number];
  ambientLightIntensity?: number;
  directionalLightIntensity?: number;
  backgroundColor?: string;
}

interface ThreeSetupResult {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  controls: OrbitControls;
  containerRef: React.RefObject<HTMLDivElement>;
  animate: () => void;
  updateSize: () => void;
}

/**
 * Custom hook for setting up Three.js with standardized configuration
 */
export function useThreeSetup({
  cameraPosition = [0, 0, 10],
  ambientLightIntensity = 0.5,
  directionalLightIntensity = 0.8,
  backgroundColor
}: ThreeSetupOptions = {}): ThreeSetupResult {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scene] = useState(new THREE.Scene());
  const [camera] = useState(new THREE.PerspectiveCamera(75, 1, 0.1, 1000));
  const [renderer] = useState(new THREE.WebGLRenderer({ antialias: true, alpha: true }));
  const [controls, setControls] = useState<OrbitControls | null>(null);

  // Initialize camera, renderer, controls
  useEffect(() => {
    if (!containerRef.current) return;

    // Set camera position
    camera.position.set(...cameraPosition);

    // Configure renderer
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);

    if (backgroundColor) {
      renderer.setClearColor(backgroundColor);
    }

    // Setup controls
    const newControls = new OrbitControls(camera, renderer.domElement);
    newControls.enableDamping = true;
    newControls.dampingFactor = 0.1;
    setControls(newControls);

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, ambientLightIntensity);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, directionalLightIntensity);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;

      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  // Animation loop
  const animate = () => {
    if (!controls) return;
    
    controls.update();
    renderer.render(scene, camera);
  };

  // Update size method for external calls
  const updateSize = () => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  };

  return {
    scene,
    camera,
    renderer,
    controls: controls as OrbitControls,
    containerRef,
    animate,
    updateSize
  };
}
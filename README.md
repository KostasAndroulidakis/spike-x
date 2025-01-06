# spike-x
R&D platform for Spiking Neural Networks and Neuromorphic Computing

## Overview
- `lib`: written in C++, contains different models of neurons, synapses, axons, dendrites, architectures, learning methods, etc.
- `data`: contains various training datasets and various types of files.
- `backend`: written in C++, orchestrates model building, training workflows, and data handling.  
- `frontend`: written in TypeScript, JavaScript, CSS (Remix, React, Theee.js etc), it’s a user-friendly and interactive interface for building SNN models with real-time 3D visualization for architecture and track training progress.
- `api`: written in C++, it's used to connect `lib`, `data`, `backend` and `frontend` together so that they can all communicate with each other.

## Features
- Modular design for rapid experimentation with different neuron/synapse models.  
- Configurable layers, wiring patterns, and learning rules.  
- Integrated 3D visualization to inspect network topologies in real time.

// File: spike-x/frontend/app/routes/library.tsx

import React from "react";
import { FaBrain, FaProjectDiagram, FaStream, FaShareAlt } from "react-icons/fa";

export default function Library() {
  return (
    <div className="p-4 max-w-screen-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Neural Network Library</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        
        {/* Neurons Section */}
        <div className="p-6 border border-gray-300 rounded shadow hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <FaBrain className="text-4xl text-blue-500 mr-4" />
            <h2 className="text-2xl font-semibold">Neurons</h2>
          </div>
          <p className="text-white mb-4">
            Neurons are the fundamental building blocks of spiking neural networks. They receive inputs from other neurons or external stimuli, process the information, and generate output spikes based on their internal state and activation functions.
          </p>
          <ul className="list-disc list-inside text-white">
            <li><strong>Membrane Potential:</strong> Represents the current state of the neuron.</li>
            <li><strong>Threshold:</strong> The value at which the neuron fires a spike.</li>
            <li><strong>Activation Function:</strong> Determines the neuron's output based on input.</li>
          </ul>
        </div>
        
        {/* Synapses Section */}
        <div className="p-6 border border-gray-300 rounded shadow hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <FaProjectDiagram className="text-4xl text-green-500 mr-4" />
            <h2 className="text-2xl font-semibold">Synapses</h2>
          </div>
          <p className="text-white mb-4">
            Synapses are the connections between neurons that facilitate communication within the network. They transmit electrical or chemical signals from one neuron to another, influencing the receiving neuron's activity.
          </p>
          <ul className="list-disc list-inside text-white">
            <li><strong>Synaptic Weight:</strong> Determines the strength of the connection.</li>
            <li><strong>Plasticity:</strong> The ability of synapses to strengthen or weaken over time.</li>
            <li><strong>Types:</strong> Excitatory and inhibitory synapses regulate neuronal firing.</li>
          </ul>
        </div>
        
        {/* Axons Section */}
        <div className="p-6 border border-gray-300 rounded shadow hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <FaStream className="text-4xl text-purple-500 mr-4" />
            <h2 className="text-2xl font-semibold">Axons</h2>
          </div>
          <p className="text-white mb-4">
            Axons are long, slender projections of neurons that transmit electrical impulses away from the neuron's cell body. They play a crucial role in conveying signals to other neurons, muscles, or glands.
          </p>
          <ul className="list-disc list-inside text-white">
            <li><strong>Conduction Velocity:</strong> Speed at which electrical impulses travel.</li>
            <li><strong>Myelination:</strong> Insulation around axons that increases signal transmission speed.</li>
            <li><strong>Branching:</strong> Allows a single neuron to communicate with multiple targets.</li>
          </ul>
        </div>
        
        {/* Dendrites Section */}
        <div className="p-6 border border-gray-300 rounded shadow hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <FaShareAlt className="text-4xl text-red-500 mr-4" />
            <h2 className="text-2xl font-semibold">Dendrites</h2>
          </div>
          <p className="text-white mb-4">
            Dendrites are branched extensions of neurons that receive signals from other neurons. They play a key role in integrating incoming information and determining whether the neuron will fire an action potential.
          </p>
          <ul className="list-disc list-inside text-white">
            <li><strong>Signal Integration:</strong> Combines multiple incoming signals.</li>
            <li><strong>Plasticity:</strong> Ability to form new connections based on activity.</li>
            <li><strong>Structure:</strong> Highly branched to maximize synaptic connections.</li>
          </ul>
        </div>
        
      </div>
    </div>
  );
}

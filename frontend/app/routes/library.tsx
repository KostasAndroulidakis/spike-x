// File: spike-x/frontend/app/routes/library.tsx

import React from "react";
import { FaBrain, FaProjectDiagram, FaStream, FaShareAlt } from "react-icons/fa";

export default function Library() {
  return (
    <div className="p-4 max-w-screen-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Neurons Section */}
        <div className="p-6 border border-gray-300 rounded shadow hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <FaBrain className="text-4xl text-blue-500 mr-4" />
            <h2 className="text-2xl font-semibold">Neurons</h2>
          </div>
        </div>
        
        {/* Synapses Section */}
        <div className="p-6 border border-gray-300 rounded shadow hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <FaProjectDiagram className="text-4xl text-green-500 mr-4" />
            <h2 className="text-2xl font-semibold">Synapses</h2>
          </div>
        </div>
        
        {/* Axons Section */}
        <div className="p-6 border border-gray-300 rounded shadow hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <FaStream className="text-4xl text-purple-500 mr-4" />
            <h2 className="text-2xl font-semibold">Axons</h2>
          </div>
        </div>
        
        {/* Dendrites Section */}
        <div className="p-6 border border-gray-300 rounded shadow hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <FaShareAlt className="text-4xl text-red-500 mr-4" />
            <h2 className="text-2xl font-semibold">Dendrites</h2>
          </div>
        </div>
        
      </div>
    </div>
  );
}
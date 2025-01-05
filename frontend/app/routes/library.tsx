// File: spike-x/frontend/app/routes/library.tsx

import React, { useState } from "react";
import { FaBrain, FaProjectDiagram, FaStream, FaShareAlt, FaSearch, FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Section {
  title: string;
  columns: Column[];
}

interface Column {
  icon: React.ReactNode;
  title: string;
  items: string[];
}

export default function Library() {
  const sections: Section[] = [
    {
      title: "Neural Components",
      columns: [
        {
          icon: <FaBrain className="text-4xl text-blue-500" />,
          title: "Neurons",
          items: [
            "Leaky Integrate-and-Fire",
            "Hodgkin-Huxley",
            "Izhikevich",
            "Adaptive Exponential",
            "Morris-Lecar",
            "FitzHugh-Nagumo"
          ]
        },
        {
          icon: <FaProjectDiagram className="text-4xl text-green-500" />,
          title: "Synapses",
          items: [
            "AMPA Receptor",
            "NMDA Receptor",
            "GABA Receptor",
            "Gap Junction",
            "Chemical Synapse",
            "Electrical Synapse"
          ]
        },
        {
          icon: <FaStream className="text-4xl text-purple-500" />,
          title: "Axons",
          items: [
            "Myelinated",
            "Unmyelinated",
            "Multi-compartment",
            "Cable Model",
            "Saltatory Conduction",
            "Action Potential"
          ]
        },
        {
          icon: <FaShareAlt className="text-4xl text-red-500" />,
          title: "Dendrites",
          items: [
            "Branching Dendrite",
            "Dendritic Spine",
            "Active Dendrite",
            "Passive Dendrite",
            "Dendritic Integration",
            "Calcium Dynamics"
          ]
        }
      ]
    }
  ];

  const [currentSection, setCurrentSection] = useState(0);
  const [searchTerms, setSearchTerms] = useState<{ [key: string]: string }>({});

  const handleSearch = (columnIndex: number, term: string) => {
    setSearchTerms(prev => ({ ...prev, [columnIndex]: term }));
  };

  const navigateSection = (direction: 'prev' | 'next') => {
    setCurrentSection(prev => {
      if (direction === 'prev') {
        return prev > 0 ? prev - 1 : sections.length - 1;
      } else {
        return prev < sections.length - 1 ? prev + 1 : 0;
      }
    });
  };

  const filteredItems = (items: string[], columnIndex: number) => {
    const searchTerm = searchTerms[columnIndex]?.toLowerCase() || '';
    return items.filter(item => item.toLowerCase().includes(searchTerm));
  };

  return (
    <div className="relative min-h-screen p-4 bg-black">
      <div className="max-w-screen-2xl mx-auto h-[80vh] relative">
        <button 
          onClick={() => navigateSection('prev')}
          className="absolute left-0 top-1/2 -translate-y-1/2 -ml-12 p-4 text-gray-400 hover:text-gray-200"
        >
          <FaChevronLeft className="text-3xl" />
        </button>

        <button 
          onClick={() => navigateSection('next')}
          className="absolute right-0 top-1/2 -translate-y-1/2 -mr-12 p-4 text-gray-400 hover:text-gray-200"
        >
          <FaChevronRight className="text-3xl" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 h-full">
          {sections[currentSection].columns.map((column, idx) => (
            <div 
              key={idx}
              className="flex flex-col p-6 border border-gray-700 rounded bg-gray-900 shadow hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="mr-4">{column.icon}</div>
                <h2 className="text-2xl font-semibold text-gray-200">{column.title}</h2>
              </div>

              <div className="relative mb-4">
                <input
                  type="search"
                  placeholder="Search..."
                  className="w-full px-4 py-2 pr-10 rounded bg-gray-800 border border-gray-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  onChange={(e) => handleSearch(idx, e.target.value)}
                />
                <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
              </div>

              <div className="flex-grow overflow-y-auto">
                <ul className="space-y-2">
                  {filteredItems(column.items, idx).map((item, itemIdx) => (
                    <li 
                      key={itemIdx}
                      className="p-2 text-gray-300 hover:bg-gray-800 rounded cursor-pointer transition-colors duration-200"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {sections.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSection(idx)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              currentSection === idx ? 'bg-blue-500' : 'bg-gray-700'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
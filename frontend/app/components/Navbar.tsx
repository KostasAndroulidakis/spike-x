import React, { useState } from "react";
import { Menu, Brain, Activity, Eye, Monitor, Bug, Download, Settings, HelpCircle } from 'lucide-react';


export default function Navbar() {
  const [isFileMenuOpen, setFileMenuOpen] = useState(false);

  const toggleFileMenu = () => {
    setFileMenuOpen(!isFileMenuOpen);
  };

  const menuItems = [
    { Icon: Brain, text: 'Architecture' },
    { Icon: Activity, text: 'Training' },
    { Icon: Eye, text: 'Visualization' },
  ];

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="relative">
        <button
          className="px-4 py-2 hover:bg-gray-700 rounded"
          onClick={toggleFileMenu}
        >
          <Menu className="w-5 h-5 inline-block mr-2" />
          File
        </button>

        {isFileMenuOpen && (
          <ul className="absolute bg-gray-700 text-white mt-2 rounded shadow-lg p-2 min-w-max">
            <li className="hover:bg-gray-600 px-4 py-2 rounded">New Model</li>
            <li className="hover:bg-gray-600 px-4 py-2 rounded">Open Model</li>
            <li className="hover:bg-gray-600 px-4 py-2 rounded">Save Model</li>
            <li className="hover:bg-gray-600 px-4 py-2 rounded">Save Model As</li>
            <li className="hover:bg-gray-600 px-4 py-2 rounded">Rename Model</li>
            <li className="hover:bg-gray-600 px-4 py-2 rounded">Delete Model</li>
            <li className="hover:bg-gray-600 px-4 py-2 rounded">Export Model</li>
          </ul>
        )}
      </div>

      <div className="flex space-x-4">
        {menuItems.map(({ Icon, text }) => (
          <button key={text} className="px-4 py-2 hover:bg-gray-700 rounded">
            <Icon className="w-5 h-5 inline-block mr-2" />
            {text}
          </button>
        ))}
      </div>

      <div className="flex space-x-4">
        <button className="px-4 py-2 hover:bg-gray-700 rounded">
          <Settings className="w-5 h-5 inline-block mr-2" />
          Settings
        </button>
      </div>
    </nav>
  );
}
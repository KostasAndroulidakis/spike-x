import React, { useState } from "react";

export default function Navbar() {
  const [isFileMenuOpen, setFileMenuOpen] = useState(false);

  const toggleFileMenu = () => {
    setFileMenuOpen(!isFileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="relative">
        <button
          className="px-4 py-2 hover:bg-gray-700 rounded"
          onClick={toggleFileMenu}
        >
          File
        </button>
        {isFileMenuOpen && (
          <ul className="absolute bg-gray-700 text-white mt-2 rounded shadow-lg p-2">
            <li className="hover:bg-gray-600 px-4 py-2 rounded">New Model</li>
            <li className="hover:bg-gray-600 px-4 py-2 rounded">Open Model</li>
            <li className="hover:bg-gray-600 px-4 py-2 rounded">Save Model</li>
            <li className="hover:bg-gray-600 px-4 py-2 rounded">Save Model As</li>
            <li className="hover:bg-gray-600 px-4 py-2 rounded">Rename Model</li>
            <li className="hover:bg-gray-600 px-4 py-2 rounded">Delete Model</li>
            <li className="hover:bg-gray-600 px-4 py-2 rounded">Recent Models</li>
            <li className="hover:bg-gray-600 px-4 py-2 rounded">Exit</li>
          </ul>
        )}
      </div>
      <div className="flex space-x-4">
        <button className="px-4 py-2 hover:bg-gray-700 rounded">Settings</button>
        <button className="px-4 py-2 hover:bg-gray-700 rounded">Help</button>
      </div>
    </nav>
  );
}

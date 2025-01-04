import React, { useState } from "react";
import {
  Menu,
  House,
  Brain,
  Activity,
  Eye,
  Settings,
} from "lucide-react";
import { Link } from "@remix-run/react"; // Εισαγωγή του Link

export default function Navbar() {
  const [isFileMenuOpen, setFileMenuOpen] = useState(false);

  const toggleFileMenu = () => {
    setFileMenuOpen(!isFileMenuOpen);
  };

  const menuItems = [
    { Icon: House, text: "Main", path: "/home" },
    { Icon: Brain, text: "Architecture", path: "/architecture" },
    { Icon: Activity, text: "Training", path: "/training" },
    { Icon: Eye, text: "Visualization", path: "/visualization" },
  ];

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      {/* File Menu */}
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

      {/* Main Menu */}
      <div className="flex space-x-4">
        {menuItems.map(({ Icon, text, path }) => (
          <Link
            key={text}
            to={path} // Χρήση του Link για να ορίσουμε τη διαδρομή
            className="px-4 py-2 hover:bg-gray-700 rounded flex items-center"
          >
            <Icon className="w-5 h-5 inline-block mr-2" />
            {text}
          </Link>
        ))}
      </div>

      {/* Settings Button */}
      <div className="flex space-x-4">
        <button className="px-4 py-2 hover:bg-gray-700 rounded flex items-center">
          <Settings className="w-5 h-5 inline-block mr-2" />
          Settings
        </button>
      </div>
    </nav>
  );
}

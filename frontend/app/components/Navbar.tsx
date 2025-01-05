import React, { useState } from "react";
import {
  Menu,
  House,
  Brain,
  Activity,
  ChartScatter,
  Library,
  Eye,
  Settings,
} from "lucide-react";
import { Link, useLocation } from "@remix-run/react";

export default function Navbar() {
  const [isFileMenuOpen, setFileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleFileMenu = () => {
    setFileMenuOpen(!isFileMenuOpen);
  };

  const menuItems = [
    { Icon: House, text: "Main", path: "/home" },
    { Icon: Brain, text: "Architecture", path: "/architecture" },
    { Icon: Activity, text: "Training", path: "/training" },
    { Icon: Eye, text: "Visualization", path: "/visualization" },
    { Icon: ChartScatter, text: "Evaluation", path: "/evaluation" },
    { Icon: Library, text: "Library", path: "/library" },
  ];

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      {/* File Menu */}
      <div className="relative">
        <button
          className="px-4 py-2 hover:bg-gray-700 rounded transition-colors duration-200"
          onClick={toggleFileMenu}
        >
          <Menu className="w-5 h-5 inline-block mr-2" />
          File
        </button>

        {isFileMenuOpen && (
          <ul className="absolute bg-gray-700 text-white mt-2 rounded shadow-lg p-2 min-w-max z-50">
            <li className="hover:bg-gray-600 px-4 py-2 rounded cursor-pointer">
              New Model
            </li>
            <li className="hover:bg-gray-600 px-4 py-2 rounded cursor-pointer">
              Open Model
            </li>
            <li className="hover:bg-gray-600 px-4 py-2 rounded cursor-pointer">
              Save Model
            </li>
            <li className="hover:bg-gray-600 px-4 py-2 rounded cursor-pointer">
              Save Model As
            </li>
            <li className="hover:bg-gray-600 px-4 py-2 rounded cursor-pointer">
              Rename Model
            </li>
            <li className="hover:bg-gray-600 px-4 py-2 rounded cursor-pointer">
              Delete Model
            </li>
            <li className="hover:bg-gray-600 px-4 py-2 rounded cursor-pointer">
              Export Model
            </li>
          </ul>
        )}
      </div>

      {/* Main Menu */}
      <div className="flex space-x-4">
        {menuItems.map(({ Icon, text, path }) => {
          const isSelected = location.pathname === path;
          return (
            <Link
              key={text}
              to={path}
              className={`px-4 py-2 rounded flex items-center transition-colors duration-200 ${
                isSelected
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-700 text-gray-300 hover:text-white"
              }`}
            >
              <Icon
                className={`w-5 h-5 inline-block mr-2 ${
                  isSelected ? "text-white" : "text-gray-300"
                }`}
              />
              {text}
            </Link>
          );
        })}
      </div>

      {/* Settings Button */}
      <div className="flex space-x-4">
        <button className="px-4 py-2 hover:bg-gray-700 rounded flex items-center transition-colors duration-200 text-gray-300 hover:text-white">
          <Settings className="w-5 h-5 inline-block mr-2" />
          Settings
        </button>
      </div>
    </nav>
  );
}
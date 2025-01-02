// app/components/MenuBar.tsx
import React from "react";

export default function MenuBar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex space-x-4">
      <button className="hover:bg-gray-700 px-2 py-1 rounded">File</button>
      <button className="hover:bg-gray-700 px-2 py-1 rounded">Architecture</button>
      <button className="hover:bg-gray-700 px-2 py-1 rounded">Training</button>
      <button className="hover:bg-gray-700 px-2 py-1 rounded">Visualization</button>
      <button className="hover:bg-gray-700 px-2 py-1 rounded">Monitor</button>
      <button className="hover:bg-gray-700 px-2 py-1 rounded">Debug</button>
      <button className="hover:bg-gray-700 px-2 py-1 rounded">Export</button>
      <button className="hover:bg-gray-700 px-2 py-1 rounded">Settings</button>
      <button className="hover:bg-gray-700 px-2 py-1 rounded">Help</button>
    </nav>
  );
}

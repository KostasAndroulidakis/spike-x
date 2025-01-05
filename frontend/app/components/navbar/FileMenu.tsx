// app/components/navbar/FileMenu.tsx
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";

export default function FileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    "New Model",
    "Open Model",
    "Save Model",
    "Save Model As",
    "Rename Model",
    "Delete Model",
    "Export Model"
  ];

  return (
    <div className="relative file-menu">
      <button
        className="px-4 py-2 hover:bg-[var(--nav-hover)] rounded transition-colors duration-200"
        onClick={toggleMenu}
      >
        <Menu className="w-5 h-5 inline-block mr-2" />
        File
      </button>
      {isOpen && (
        <ul className="absolute bg-[var(--menu-bg)] text-[var(--text)] mt-2 rounded shadow-lg p-2 min-w-max z-50">
          {menuItems.map((item) => (
            <li
              key={item}
              className="hover:bg-[var(--menu-hover)] px-4 py-2 rounded cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
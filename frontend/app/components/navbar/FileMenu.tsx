// app/components/navbar/FileMenu.tsx
import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

export default function FileMenu() {
  const [isFileMenuOpen, setFileMenuOpen] = useState(false);

  const toggleFileMenu = () => {
    setFileMenuOpen(!isFileMenuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.file-menu')) {
        setFileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className="relative file-menu">
      <button
        className="px-4 py-2 hover:bg-[var(--nav-hover)] rounded transition-colors duration-200"
        onClick={toggleFileMenu}
      >
        <Menu className="w-5 h-5 inline-block mr-2" />
        File
      </button>
      
      {isFileMenuOpen && (
        <ul className="absolute bg-[var(--menu-bg)] text-[var(--text)] mt-2 rounded shadow-lg p-2 min-w-max z-50">
          <li className="hover:bg-[var(--menu-hover)] px-4 py-2 rounded cursor-pointer">
            New model
          </li>
          <li className="hover:bg-[var(--menu-hover)] px-4 py-2 rounded cursor-pointer">
            Open model...
          </li>
          <li className="hover:bg-[var(--menu-hover)] px-4 py-2 rounded cursor-pointer">
            Save model
          </li>
          <li className="hover:bg-[var(--menu-hover)] px-4 py-2 rounded cursor-pointer">
            Save model as...
          </li>
          <li className="hover:bg-[var(--menu-hover)] px-4 py-2 rounded cursor-pointer">
            Save new version of model
          </li>
          <li className="hover:bg-[var(--menu-hover)] px-4 py-2 rounded cursor-pointer">
            Model templates
          </li>
          <li className="hover:bg-[var(--menu-hover)] px-4 py-2 rounded cursor-pointer">
            Recent models
          </li>
          <li className="hover:bg-[var(--menu-hover)] px-4 py-2 rounded cursor-pointer">
            Close model
          </li>
          <li className="hover:bg-[var(--menu-hover)] px-4 py-2 rounded cursor-pointer">
            Export...
          </li>
        </ul>
      )}
    </div>
  );
}
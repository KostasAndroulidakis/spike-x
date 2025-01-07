import React, { useState, useEffect } from 'react';
import { Menu, ChevronRight } from 'lucide-react';

export default function FileMenu() {
  const [isFileMenuOpen, setFileMenuOpen] = useState(false);
  const [isTemplatesHovered, setTemplatesHovered] = useState(false);
  const [isRecentHovered, setRecentHovered] = useState(false);

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
          {/* First Separator */}
          <li className="border-b border-[var(--menu-hover)] my-2"></li>
          {/* Model templates with submenu */}
          <li 
            className="relative hover:bg-[var(--menu-hover)] px-4 py-2 rounded cursor-pointer flex items-center justify-between group"
            onMouseEnter={() => setTemplatesHovered(true)}
            onMouseLeave={() => setTemplatesHovered(false)}
          >
            <span>Model templates</span>
            <ChevronRight className="w-4 h-4 ml-2" />
            {/* Templates Submenu */}
            {isTemplatesHovered && (
              <ul className="absolute left-full top-0 bg-[var(--menu-bg)] text-[var(--text)] rounded shadow-lg p-2 min-w-max ml-1">
                <li className="hover:bg-[var(--menu-hover)] px-4 py-2 rounded cursor-pointer">
                  Template 1
                </li>
                <li className="hover:bg-[var(--menu-hover)] px-4 py-2 rounded cursor-pointer">
                  Template 2
                </li>
                <li className="hover:bg-[var(--menu-hover)] px-4 py-2 rounded cursor-pointer">
                  Template 3
                </li>
              </ul>
            )}
          </li>
          {/* Recent models with submenu */}
          <li 
            className="relative hover:bg-[var(--menu-hover)] px-4 py-2 rounded cursor-pointer flex items-center justify-between group"
            onMouseEnter={() => setRecentHovered(true)}
            onMouseLeave={() => setRecentHovered(false)}
          >
            <span>Recent models</span>
            <ChevronRight className="w-4 h-4 ml-2" />
            {/* Recent Models Submenu */}
            {isRecentHovered && (
              <ul className="absolute left-full top-0 bg-[var(--menu-bg)] text-[var(--text)] rounded shadow-lg p-2 min-w-max ml-1">
                <li className="hover:bg-[var(--menu-hover)] px-4 py-2 rounded cursor-pointer">
                  Model 1
                </li>
                <li className="hover:bg-[var(--menu-hover)] px-4 py-2 rounded cursor-pointer">
                  Model 2
                </li>
                <li className="hover:bg-[var(--menu-hover)] px-4 py-2 rounded cursor-pointer">
                  Model 3
                </li>
              </ul>
            )}
          </li>
          {/* Second Separator */}
          <li className="border-b border-[var(--menu-hover)] my-2"></li>
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
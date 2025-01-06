import React, { useState, useEffect } from "react";
import {
  House,
  Brain,
  Activity,
  ChartScatter,
  Library,
  Eye,
  Sun,
  Moon,
} from "lucide-react";
import { Link, useLocation } from "@remix-run/react";
import FileMenu from "./navbar/FileMenu";

export default function Navbar() {
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const location = useLocation();

  useEffect(() => {
    // Initialize theme from localStorage or system preference
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const initialTheme = savedTheme || systemTheme;
    
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const toggleUserMenu = () => {
    setUserMenuOpen(!isUserMenuOpen);
  };

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.user-menu')) {
        setUserMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const menuItems = [
    { Icon: House, text: "Main", path: "/home" },
    { Icon: Brain, text: "Architecture", path: "/architecture" },
    { Icon: Activity, text: "Training", path: "/training" },
    { Icon: Eye, text: "Visualization", path: "/visualization" },
    { Icon: ChartScatter, text: "Evaluation", path: "/evaluation" },
    { Icon: Library, text: "Library", path: "/library" },
  ];

  return (
    <nav className="bg-[var(--nav-bg)] text-[var(--text)] p-4 flex justify-between items-center transition-colors duration-200">
      <FileMenu />

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
                  : "hover:bg-[var(--nav-hover)] text-[var(--text)] hover:text-[var(--text)]"
              }`}
            >
              <Icon
                className={`w-5 h-5 inline-block mr-2 ${
                  isSelected ? "text-white" : "text-[var(--text)]"
                }`}
              />
              {text}
            </Link>
          );
        })}
      </div>

      {/* User Profile */}
      <div className="relative user-menu">
        <button
          onClick={toggleUserMenu}
          className="w-10 h-10 rounded-full overflow-hidden hover:ring-2 hover:ring-blue-500 transition-all duration-200"
        >
          <img
            src="/api/placeholder/40/40"
            alt="User profile"
            className="w-full h-full object-cover"
          />
        </button>
        
        {isUserMenuOpen && (
          <div className="absolute right-0 mt-2 bg-[var(--menu-bg)] rounded shadow-lg p-2 min-w-[200px] z-50">
            <div className="px-4 py-2 border-b border-[var(--nav-hover)]">
              <p className="font-semibold">User Name</p>
              <p className="text-sm text-gray-500">user@example.com</p>
            </div>
            <button
              onClick={toggleTheme}
              className="w-full flex items-center px-4 py-2 hover:bg-[var(--menu-hover)] rounded transition-colors duration-200"
            >
              {theme === 'light' ? (
                <>
                  <Moon className="w-5 h-5 mr-2" />
                  Dark theme
                </>
              ) : (
                <>
                  <Sun className="w-5 h-5 mr-2" />
                  Light theme
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
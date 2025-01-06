// UserMenu.tsx

import React, { useState, useEffect } from 'react';
import { Sun, Moon, Settings, LogOut, UserCircle, ChevronRight, ChevronLeft } from 'lucide-react';

export default function UserMenu() {
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);
  const [isThemeSubMenuOpen, setThemeSubMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark' | 'brain'>('dark');

  useEffect(() => {
    // Initialize theme from localStorage or system preference
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | 'brain' | null;
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const initialTheme = savedTheme || systemTheme;

    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
  }, []);

  const handleThemeChange = (selectedTheme: 'light' | 'dark' | 'brain') => {
    setTheme(selectedTheme);
    localStorage.setItem('theme', selectedTheme);
    document.documentElement.setAttribute('data-theme', selectedTheme);
    setThemeSubMenuOpen(false);
    setUserMenuOpen(false);
  };

  const toggleUserMenu = () => {
    setUserMenuOpen(!isUserMenuOpen);
    setThemeSubMenuOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.user-menu')) {
        setUserMenuOpen(false);
        setThemeSubMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleSettings = () => {
    // Add settings functionality here
    console.log('Settings clicked');
    setUserMenuOpen(false);
  };

  const handleLogout = () => {
    // Add logout functionality here
    console.log('Logout clicked');
    setUserMenuOpen(false);
  };

  return (
    <div className="relative user-menu">
      <button
        onClick={toggleUserMenu}
        className="w-10 h-10 rounded-full overflow-hidden hover:ring-2 hover:ring-blue-500 transition-all duration-200"
      >
        <UserCircle className="w-full h-full text-[var(--text)]" />
      </button>
      
      {isUserMenuOpen && (
        <div className="absolute right-0 mt-2 bg-[var(--menu-bg)] rounded shadow-lg p-2 min-w-[200px] z-50">
          <div className="px-4 py-2 border-b border-[var(--nav-hover)]">
            <p className="font-semibold">User Name</p>
            <p className="text-sm text-gray-500">user@example.com</p>
          </div>
          
          {/* Theme Submenu */}
          <div className="relative">
            <button
              onClick={() => setThemeSubMenuOpen(!isThemeSubMenuOpen)}
              className="w-full flex items-center justify-between px-4 py-2 hover:bg-[var(--menu-hover)] rounded transition-colors duration-200"
            >
              <span className="flex items-center">
                <Settings className="w-5 h-5 mr-2" />
                Theme
              </span>
              {isThemeSubMenuOpen ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </button>

            {isThemeSubMenuOpen && (
              <div className="absolute right-full top-0 mt-0 bg-[var(--menu-bg)] rounded shadow-lg p-2 min-w-[150px] z-50">
                <button
                  onClick={() => handleThemeChange('light')}
                  className={`w-full flex items-center px-4 py-2 hover:bg-[var(--menu-hover)] rounded transition-colors duration-200 ${
                    theme === 'light' ? 'bg-[var(--nav-hover)]' : ''
                  }`}
                >
                  <Sun className="w-5 h-5 mr-2" />
                  Light
                </button>

                <button
                  onClick={() => handleThemeChange('dark')}
                  className={`w-full flex items-center px-4 py-2 hover:bg-[var(--menu-hover)] rounded transition-colors duration-200 ${
                    theme === 'dark' ? 'bg-[var(--nav-hover)]' : ''
                  }`}
                >
                  <Moon className="w-5 h-5 mr-2" />
                  Dark
                </button>

                <button
                  onClick={() => handleThemeChange('brain')}
                  className={`w-full flex items-center px-4 py-2 hover:bg-[var(--menu-hover)] rounded transition-colors duration-200 ${
                    theme === 'brain' ? 'bg-[var(--nav-hover)]' : ''
                  }`}
                >
                  <Settings className="w-5 h-5 mr-2" />
                  Brain
                </button>
              </div>
            )}
          </div>
          
          <button
            onClick={handleSettings}
            className="w-full flex items-center px-4 py-2 hover:bg-[var(--menu-hover)] rounded transition-colors duration-200"
          >
            <Settings className="w-5 h-5 mr-2" />
            Settings
          </button>

          <button
            onClick={handleLogout}
            className="w-full flex items-center px-4 py-2 hover:bg-[var(--menu-hover)] rounded transition-colors duration-200 text-red-500"
          >
            <LogOut className="w-5 h-5 mr-2" />
            Log Out
          </button>
        </div>
      )}
    </div>
  );
}

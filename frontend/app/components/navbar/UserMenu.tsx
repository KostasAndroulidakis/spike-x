import React, { useState, useEffect } from 'react';
import { Sun, Moon, Settings, LogOut, UserCircle } from 'lucide-react';

export default function UserMenu() {
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

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

  // Close menu when clicking outside
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

  const handleSettings = () => {
    // Add settings functionality here
    console.log('Settings clicked');
  };

  const handleLogout = () => {
    // Add logout functionality here
    console.log('Logout clicked');
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
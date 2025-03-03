import React, { useState, useEffect } from 'react';
import { Sun, Moon, Palette, Settings, LogOut, UserCircle, ChevronRight, ChevronLeft } from 'lucide-react';
import { useTheme } from '../theme/ThemeProvider';

export default function UserMenu() {
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);
  const [isThemeSubMenuOpen, setThemeSubMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleThemeChange = (selectedTheme: 'light' | 'dark') => {
    setTheme(selectedTheme);
  };

  const toggleUserMenu = () => {
    setUserMenuOpen(!isUserMenuOpen);
  };

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
    console.log('Settings clicked');
    setUserMenuOpen(false);
  };

  const handleLogout = () => {
    console.log('Logout clicked');
    setUserMenuOpen(false);
  };

  return (
    <div className="relative user-menu">
      <button
        onClick={toggleUserMenu}
        className="w-10 h-10 rounded-full overflow-hidden hover:ring-2 hover:ring-[var(--primary)] transition-all duration-200"
      >
        <UserCircle className="w-full h-full text-[var(--text)]" />
      </button>
      
      {isUserMenuOpen && (
        <div className="absolute right-0 mt-2 bg-[var(--menu-bg)] rounded shadow-lg p-2 min-w-[200px] z-50">
          <div className="px-4 py-2 border-b border-[var(--nav-hover)]">
            <p className="font-semibold">User Name</p>
            <p className="text-sm text-[var(--secondary)]">@usename</p>
          </div>
          
          {/* Appearance Section */}
          <div>
            <button
              onClick={() => setThemeSubMenuOpen(!isThemeSubMenuOpen)}
              className="w-full flex items-center justify-between px-4 py-2 hover:bg-[var(--menu-hover)] rounded transition-colors duration-200"
            >
              <span className="flex items-center">
                <Palette className="w-5 h-5 mr-2" />
                Appearance
              </span>
              {isThemeSubMenuOpen ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </button>

            {isThemeSubMenuOpen && (
              <div className="px-2 py-1">
                <button
                  onClick={() => handleThemeChange('light')}
                  className={`w-full flex items-center px-4 py-2 hover:bg-[var(--menu-hover)] rounded transition-colors duration-200 ${
                    theme === 'light' ? 'bg-[var(--nav-hover)]' : ''
                  }`}
                >
                  <Sun className="w-5 h-5 mr-2" />
                  Light theme
                </button>

                <button
                  onClick={() => handleThemeChange('dark')}
                  className={`w-full flex items-center px-4 py-2 hover:bg-[var(--menu-hover)] rounded transition-colors duration-200 ${
                    theme === 'dark' ? 'bg-[var(--nav-hover)]' : ''
                  }`}
                >
                  <Moon className="w-5 h-5 mr-2" />
                  Dark theme
                </button>
              </div>
            )}
          </div>

          {/* First Separator */}
          <div className="border-b border-[var(--nav-hover)] my-2"></div>
          
          <button
            onClick={handleSettings}
            className="w-full flex items-center px-4 py-2 hover:bg-[var(--menu-hover)] rounded transition-colors duration-200"
          >
            <Settings className="w-5 h-5 mr-2" />
            Settings
          </button>

          {/* Second Separator */}
          <div className="border-b border-[var(--nav-hover)] my-2"></div>

          <button
            onClick={handleLogout}
            className="w-full flex items-center px-4 py-2 hover:bg-[var(--menu-hover)] rounded transition-colors duration-200 text-[var(--error)]"
          >
            <LogOut className="w-5 h-5 mr-2" />
            Log Out
          </button>
        </div>
      )}
    </div>
  );
}
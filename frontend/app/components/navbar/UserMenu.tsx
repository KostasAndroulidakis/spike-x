// app/components/navbar/UserMenu.tsx
import { useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../ThemeProvider";

export default function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative user-menu">
      <button
        onClick={toggleMenu}
        className="w-10 h-10 rounded-full overflow-hidden hover:ring-2 hover:ring-blue-500 transition-all duration-200"
      >
        <img
          src="/api/placeholder/40/40"
          alt="User profile"
          className="w-full h-full object-cover"
        />
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 bg-[var(--menu-bg)] rounded shadow-lg p-2 min-w-[200px] z-50">
          <div className="px-4 py-2 border-b border-[var(--nav-hover)]">
            <p className="font-semibold">User Name</p>
            <p className="text-sm text-gray-500">user@example.com</p>
          </div>
          <button
            onClick={() => {
              toggleTheme();
              toggleMenu(); // Optionally close menu after theme switch
            }}
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
  );
}
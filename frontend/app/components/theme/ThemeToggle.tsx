// File: spike-x/frontend/app/components/theme/ThemeToggle.tsx - start

import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const cycleTheme = () => {
    const themes: Array<'light' | 'dark'> = ['light', 'dark'];
    const currentIndex = themes.indexOf(theme);
    const nextTheme = themes[(currentIndex + 1) % themes.length];
    setTheme(nextTheme);
  };

  return (
    <button
      onClick={cycleTheme}
      className="p-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-[var(--nav-hover)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--primary)]"
      aria-label={`Current theme: ${theme}. Click to cycle theme.`}
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
      <span className="sr-only">
        Switch theme (currently {theme})
      </span>
    </button>
  );
}

export default ThemeToggle;

// File: spike-x/frontend/app/components/theme/ThemeToggle.tsx - end
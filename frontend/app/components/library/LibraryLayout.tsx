import React, { ReactNode } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useTheme } from '../theme/ThemeProvider';

interface LibraryLayoutProps {
  children: ReactNode;
  currentSection: number;
  totalSections: number;
  onNavigateSection: (direction: 'prev' | 'next') => void;
  onSectionSelect: (index: number) => void;
  loading?: boolean;
}

export default function LibraryLayout({
  children,
  currentSection,
  totalSections,
  onNavigateSection,
  onSectionSelect,
  loading = false
}: LibraryLayoutProps) {
  const { theme } = useTheme();
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center bg-[var(--background)]" style={{height: "calc(100vh - 65px)"}}>
        <div className="w-16 h-16 border-4 border-[var(--primary)] border-t-transparent rounded-full animate-spin mb-6"></div>
        <div className="text-2xl text-[var(--text)] font-medium mb-2">
          Loading neural components...
        </div>
        <div className="text-md text-[var(--text-secondary)]">
          Parsing C++ models from core library
        </div>
      </div>
    );
  }

  return (
    <div className="relative p-3 bg-[var(--background)] text-[var(--text)]" style={{height: "calc(100vh - 65px)", overflow: "hidden"}}>
      <div className="max-w-screen-2xl mx-auto h-full relative flex flex-col px-12 pb-8">
        <div className="relative flex-grow overflow-hidden">
          {/* Navigation arrows moved outside grid area */}
          <button 
            onClick={() => onNavigateSection('prev')}
            className="absolute left-[-24px] top-1/2 -translate-y-1/2 z-10 p-2 text-[var(--text)] hover:text-[var(--accent)] transition-colors bg-[var(--card-bg)] shadow-sm rounded-full"
            aria-label="Previous section"
          >
            <FaChevronLeft className="text-xl" />
          </button>

          <button 
            onClick={() => onNavigateSection('next')}
            className="absolute right-[-24px] top-1/2 -translate-y-1/2 z-10 p-2 text-[var(--text)] hover:text-[var(--accent)] transition-colors bg-[var(--card-bg)] shadow-sm rounded-full"
            aria-label="Next section"
          >
            <FaChevronRight className="text-xl" />
          </button>

          {children}

          <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 flex space-x-2 z-10">
            {Array.from({ length: totalSections }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => onSectionSelect(idx)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  currentSection === idx 
                    ? 'bg-[var(--primary)]'
                    : theme === 'dark' ? 'bg-[var(--nav-bg)]' : 'bg-[var(--nav-hover)]'
                }`}
                aria-label={`Go to section ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
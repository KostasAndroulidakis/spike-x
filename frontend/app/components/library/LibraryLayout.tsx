import React, { ReactNode } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface LibraryLayoutProps {
  children: ReactNode;
  theme: 'light' | 'dark';
  currentSection: number;
  totalSections: number;
  onNavigateSection: (direction: 'prev' | 'next') => void;
  onSectionSelect: (index: number) => void;
  loading?: boolean;
}

export default function LibraryLayout({
  children,
  theme,
  currentSection,
  totalSections,
  onNavigateSection,
  onSectionSelect,
  loading = false
}: LibraryLayoutProps) {
  if (loading) {
    return (
      <div className={`flex items-center justify-center min-h-screen ${theme === 'dark' ? 'bg-[var(--background)]' : 'bg-[var(--background)]'}`}>
        <div className="text-xl text-[var(--text)]">
          Loading models...
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen p-4 bg-[var(--background)]">
      <div className="max-w-screen-2xl mx-auto h-[80vh] relative">
        <button 
          onClick={() => onNavigateSection('prev')}
          className="absolute left-0 top-1/2 -translate-y-1/2 -ml-12 p-4 text-[var(--text)] hover:text-[var(--accent)] transition-colors"
          aria-label="Previous section"
        >
          <FaChevronLeft className="text-3xl" />
        </button>

        <button 
          onClick={() => onNavigateSection('next')}
          className="absolute right-0 top-1/2 -translate-y-1/2 -mr-12 p-4 text-[var(--text)] hover:text-[var(--accent)] transition-colors"
          aria-label="Next section"
        >
          <FaChevronRight className="text-3xl" />
        </button>

        {children}

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
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
  );
}
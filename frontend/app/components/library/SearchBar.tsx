import React from 'react';
import { FaSearch } from 'react-icons/fa';

interface SearchBarProps {
  onSearch: (term: string) => void;
  placeholder?: string;
}

export default function SearchBar({ 
  onSearch, 
  placeholder = "Search..." 
}: SearchBarProps) {
  return (
    <div className="relative mb-4">
      <input
        type="search"
        placeholder={placeholder}
        className="w-full px-4 py-2 pr-10 rounded border focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
        onChange={(e) => onSearch(e.target.value)}
      />
      <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--secondary)]" />
    </div>
  );
}
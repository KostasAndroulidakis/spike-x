import React from 'react';
import { FaSearch } from 'react-icons/fa';

interface SearchBarProps {
  onSearch: (term: string) => void;
  placeholder?: string;
  className?: string;
}

export default function SearchBar({ 
  onSearch, 
  placeholder = "Search...",
  className = ''
}: SearchBarProps) {
  return (
    <div className={`relative ${className}`}>
      <input
        type="search"
        placeholder={placeholder}
        className="w-full px-4 py-2 pr-10 rounded border border-[var(--input-border)] !bg-white !text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
        style={{ backgroundColor: 'white', color: 'black' }} /* Ensure styles override theme */
        onChange={(e) => onSearch(e.target.value)}
      />
      <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
    </div>
  );
}
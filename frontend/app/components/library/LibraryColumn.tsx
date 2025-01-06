import React from 'react';
import SearchBar from './SearchBar';

interface Model {
  id: string;
  name: string;
}

interface LibraryColumnProps {
  icon: React.ReactNode;
  title: string;
  items: Model[];
  onSearch: (term: string) => void;
  filteredItems: Model[];
}

export default function LibraryColumn({
  icon,
  title,
  onSearch,
  filteredItems
}: LibraryColumnProps) {
  return (
    <div className="flex flex-col p-6 border rounded shadow hover:shadow-lg transition-shadow duration-300 
      bg-[var(--menu-bg)] border-[var(--nav-hover)]">
      <div className="flex items-center mb-4">
        <div className="mr-4">{icon}</div>
        <h2 className="text-2xl font-semibold text-[var(--text)]">{title}</h2>
      </div>

      <SearchBar onSearch={onSearch} />

      <div className="flex-grow overflow-y-auto">
        <ul className="space-y-2">
          {filteredItems.map((item, itemIdx) => (
            <li 
              key={itemIdx}
              className="p-2 rounded cursor-pointer transition-colors duration-200 text-[var(--text)] hover:bg-[var(--menu-hover)]"
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
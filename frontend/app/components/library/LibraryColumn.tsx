import React from 'react';
import SearchBar from './SearchBar';
import ModelList from './ModelList';
import ColumnHeader from './ColumnHeader';

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
  onItemClick?: (item: Model) => void;
}

export default function LibraryColumn({
  icon,
  title,
  onSearch,
  filteredItems,
  onItemClick
}: LibraryColumnProps) {
  return (
    <div className="flex flex-col p-6 border rounded shadow hover:shadow-lg transition-shadow duration-300 
      bg-[var(--menu-bg)] border-[var(--nav-hover)]">
      <ColumnHeader 
        icon={icon}
        title={title}
      />
      
      <SearchBar onSearch={onSearch} />

      <ModelList 
        items={filteredItems}
        onItemClick={onItemClick}
      />
    </div>
  );
}
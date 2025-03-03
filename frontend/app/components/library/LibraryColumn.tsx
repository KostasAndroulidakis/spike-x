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
    <div className="panel flex flex-col hover:shadow-md transition-shadow duration-300">
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
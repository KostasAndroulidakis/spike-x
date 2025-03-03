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
    <div className="panel flex flex-col hover:shadow-md transition-shadow duration-300 h-full max-h-[calc(100vh-120px)]">
      <ColumnHeader 
        icon={icon}
        title={title}
        className="flex-shrink-0"
      />
      
      <SearchBar onSearch={onSearch} className="flex-shrink-0 mb-2" />

      <div className="flex-grow overflow-hidden">
        <ModelList 
          items={filteredItems}
          onItemClick={onItemClick}
        />
        {/* Add some empty space at the bottom for better scrolling */}
        <div className="h-6"></div>
      </div>
    </div>
  );
}
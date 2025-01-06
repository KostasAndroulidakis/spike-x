import React from 'react';

interface Model {
  id: string;
  name: string;
}

interface ModelListProps {
  items: Model[];
  onItemClick?: (item: Model) => void;
}

export default function ModelList({ 
  items,
  onItemClick 
}: ModelListProps) {
  return (
    <div className="flex-grow overflow-y-auto">
      <ul className="space-y-2">
        {items.map((item, itemIdx) => (
          <li 
            key={item.id || itemIdx}
            onClick={() => onItemClick?.(item)}
            className="p-2 rounded cursor-pointer transition-colors duration-200 text-[var(--text)] hover:bg-[var(--menu-hover)]"
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
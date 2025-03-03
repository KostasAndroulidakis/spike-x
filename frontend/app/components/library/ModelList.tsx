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
    <div className="h-full overflow-y-auto pr-1">
      {items.length > 0 ? (
        <ul className="space-y-1">
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
      ) : (
        <div className="p-4 text-center">
          <p className="text-[var(--text-secondary)] italic">No components found</p>
        </div>
      )}
    </div>
  );
}
// components/architecture/layers/LayerHeader.tsx
import React from 'react';

interface LayerHeaderProps {
  name: string;
  isOpen: boolean;
  onToggle: () => void;
}

const LayerHeader: React.FC<LayerHeaderProps> = ({
  name,
  isOpen,
  onToggle,
}) => {
  return (
    <div
      className="flex justify-between items-center cursor-pointer"
      onClick={onToggle}
    >
      <h2 className="text-lg font-semibold text-[var(--text)]">{name}</h2>
      <span className="text-[var(--secondary)]">
        {isOpen ? "▲" : "▼"}
      </span>
    </div>
  );
};

export default LayerHeader;
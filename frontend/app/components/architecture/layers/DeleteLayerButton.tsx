// components/architecture/layers/DeleteLayerButton.tsx
import React from 'react';

interface DeleteLayerButtonProps {
  onDelete: () => void;
}

const DeleteLayerButton: React.FC<DeleteLayerButtonProps> = ({ onDelete }) => {
  return (
    <div className="flex justify-end">
      <button
        className="mt-4 bg-[var(--error)] text-white px-4 py-2 rounded hover:bg-opacity-90 transition-colors"
        onClick={onDelete}
      >
        Delete Layer
      </button>
    </div>
  );
};

export default DeleteLayerButton;
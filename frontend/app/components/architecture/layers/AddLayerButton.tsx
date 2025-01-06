// components/architecture/layers/AddLayerButton.tsx
import React from 'react';

interface AddLayerButtonProps {
  onClick: () => void;
}

const AddLayerButton: React.FC<AddLayerButtonProps> = ({ onClick }) => {
  return (
    <div className="flex justify-center">
      <button
        className="bg-[var(--primary)] text-white px-4 py-2 rounded mt-4 hover:bg-opacity-90 transition-colors"
        onClick={onClick}
      >
        Add Layer
      </button>
    </div>
  );
};

export default AddLayerButton;
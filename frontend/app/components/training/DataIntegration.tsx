// File: spike-x/frontend/src/components/training/DataIntegration.tsx - start

import { useState } from 'react';

interface DataIntegrationProps {
  selectedDataset: string;
  setSelectedDataset: (dataset: string) => void;
  setCustomDataset: (file: File | null) => void;
}

export function DataIntegration({ 
  selectedDataset, 
  setSelectedDataset,
  setCustomDataset 
}: DataIntegrationProps) {
  return (
    <div className="p-4 bg-[var(--nav-bg)] rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Data Integration</h2>
      <div className="mb-4">
        <label className="block font-medium mb-2">Select Dataset:</label>
        <select
          className="w-full p-2 bg-[var(--background)] border rounded"
          value={selectedDataset}
          onChange={(e) => setSelectedDataset(e.target.value)}
        >
          <option value="MNIST">MNIST</option>
          <option value="CIFAR-10">CIFAR-10</option>
          <option value="Fashion-MNIST">Fashion-MNIST</option>
        </select>
      </div>
      <div>
        <label className="block font-medium mb-2">Upload Custom Dataset:</label>
        <input
          type="file"
          accept=".csv,.json,.txt"
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
              setCustomDataset(e.target.files[0]);
            }
          }}
          className="w-full p-2 bg-[var(--background)] border rounded"
        />
      </div>
    </div>
  );
}

// File: spike-x/frontend/src/components/training/DataIntegration.tsx - end
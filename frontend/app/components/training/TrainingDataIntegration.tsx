import { useState } from 'react';

interface TrainingDataIntegrationProps {
  selectedDataset: string;
  onSelectDataset: (dataset: string) => void;
  onUploadDataset: (file: File | null) => void;
}

export function TrainingDataIntegration({
  selectedDataset,
  onSelectDataset,
  onUploadDataset
}: TrainingDataIntegrationProps) {
  const [customDataset, setCustomDataset] = useState<File | null>(null);

  // Handle Custom Dataset Upload
  const handleDatasetUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setCustomDataset(file);
      onUploadDataset(file);
    }
  };

  return (
    <div className="p-3 border border-gray-300 rounded flex-shrink-0 text-[var(--text)]">
      <h2 className="text-lg font-semibold mb-3">Data Integration</h2>
      {/* Ready-Made Datasets */}
      <div className="mb-3">
        <label className="block font-medium text-sm mb-1">Select Dataset:</label>
        <select
          className="w-full p-1.5 border rounded text-sm appearance-none"
          value={selectedDataset}
          onChange={(e) => onSelectDataset(e.target.value)}
        >
          <option value="MNIST">MNIST</option>
          <option value="CIFAR-10">CIFAR-10</option>
          <option value="Fashion-MNIST">Fashion-MNIST</option>
        </select>
      </div>
      {/* Custom Dataset Upload */}
      <div>
        <label className="block font-medium text-sm mb-1">Upload Custom Dataset:</label>
        <input
          type="file"
          accept=".csv,.json,.txt"
          onChange={handleDatasetUpload}
          className="w-full p-1 border rounded text-sm"
        />
        {customDataset && (
          <p className="mt-1 text-xs text-[var(--success)]">Selected: {customDataset.name}</p>
        )}
      </div>
    </div>
  );
}
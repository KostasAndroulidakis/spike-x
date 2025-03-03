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
    <div className="panel flex-shrink-0">
      <h2 className="panel-header">Data Integration</h2>
      {/* Ready-Made Datasets */}
      <div className="mb-3">
        <label className="block font-medium text-sm mb-1 text-[var(--text)]">Select Dataset:</label>
        <select
          className="w-full p-1.5 rounded text-sm"
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
        <label className="block font-medium text-sm mb-1 text-[var(--text)]">Upload Custom Dataset:</label>
        <input
          type="file"
          accept=".csv,.json,.txt"
          onChange={handleDatasetUpload}
          className="w-full p-1 rounded text-sm"
        />
        {customDataset && (
          <p className="mt-1 text-xs text-[var(--success)]">Selected: {customDataset.name}</p>
        )}
      </div>
    </div>
  );
}
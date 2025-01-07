// File: spike-x/frontend/src/app/components/training/EpochMetering.tsx - start

interface EpochMeteringProps {
    currentBatch: number;
    totalBatchesPerEpoch: number;
    currentEpoch: number;
    numberOfEpochs: number;
  }
  
  export function EpochMetering({
    currentBatch,
    totalBatchesPerEpoch,
    currentEpoch,
    numberOfEpochs
  }: EpochMeteringProps) {
    return (
      <div className="p-4 bg-[var(--nav-bg)] rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Epoch Metering</h2>
        
        {/* Batch Progress */}
        <div className="mb-6">
          <label className="block font-medium mb-2">Batch Progress:</label>
          <div className="w-full bg-[var(--background)] rounded-full h-4">
            <div
              className="bg-[var(--warning)] h-4 rounded-full transition-all duration-200"
              style={{
                width: `${(currentBatch / totalBatchesPerEpoch) * 100}%`,
              }}
            />
          </div>
          <p className="mt-1 text-sm text-[var(--text)]">
            Batch {currentBatch} / {totalBatchesPerEpoch} (
            {((currentBatch / totalBatchesPerEpoch) * 100).toFixed(1)}%)
          </p>
        </div>
  
        {/* Total Training Progress */}
        <div>
          <label className="block font-medium mb-2">Total Training Progress:</label>
          <div className="w-full bg-[var(--background)] rounded-full h-4">
            <div
              className="bg-[var(--accent)] h-4 rounded-full transition-all duration-200"
              style={{
                width: `${(currentEpoch / numberOfEpochs) * 100}%`,
              }}
            />
          </div>
          <p className="mt-1 text-sm text-[var(--text)]">
            Epoch {currentEpoch} / {numberOfEpochs} (
            {((currentEpoch / numberOfEpochs) * 100).toFixed(1)}%)
          </p>
        </div>
      </div>
    );
  }

// File: spike-x/frontend/src/app/components/training/EpochMetering.tsx - end
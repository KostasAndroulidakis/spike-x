// File: spike-x/frontend/app/components/training/TrainingMeters.tsx - start

interface TrainingMetersProps {
    performanceRate: number;
    errors: number;
    modelProgress: number;
  }
  
  export function TrainingMeters({
    performanceRate,
    errors,
    modelProgress
  }: TrainingMetersProps) {
    return (
      <div className="p-4 bg-[var(--nav-bg)] rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Training Meters</h2>
        
        {/* Performance Rate */}
        <div className="mb-4">
          <label className="block font-medium mb-2">Performance Rate:</label>
          <div className="w-full bg-[var(--background)] rounded-full h-4">
            <div
              className="bg-[var(--primary)] h-4 rounded-full transition-all duration-200"
              style={{ width: `${performanceRate}%` }}
            />
          </div>
          <p className="mt-1 text-sm text-[var(--text)]">{performanceRate}%</p>
        </div>
  
        {/* Errors */}
        <div className="mb-4">
          <label className="block font-medium mb-2">Errors:</label>
          <div className="w-full bg-[var(--background)] rounded-full h-4">
            <div
              className="bg-[var(--error)] h-4 rounded-full transition-all duration-200"
              style={{ width: `${(errors / 100) * 100}%` }}
            />
          </div>
          <p className="mt-1 text-sm text-[var(--text)]">{errors} Errors</p>
        </div>
  
        {/* Model Progress */}
        <div>
          <label className="block font-medium mb-2">Model Progress:</label>
          <div className="w-full bg-[var(--background)] rounded-full h-4">
            <div
              className="bg-[var(--success)] h-4 rounded-full transition-all duration-200"
              style={{ width: `${modelProgress}%` }}
            />
          </div>
          <p className="mt-1 text-sm text-[var(--text)]">{modelProgress}% Completed</p>
        </div>
      </div>
    );
  }

// File: spike-x/frontend/app/components/training/TrainingMeters.tsx - end
import React from 'react';

export interface ProgressBarProps {
  value: number;
  max: number;
  label?: string;
  colorClass?: string;
  showPercentage?: boolean;
  ariaLabel?: string;
}

/**
 * Reusable progress bar component used throughout the application
 */
export function ProgressBar({
  value,
  max,
  label,
  colorClass = 'progress-primary',
  showPercentage = true,
  ariaLabel
}: ProgressBarProps) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));
  
  return (
    <div className="mb-3">
      {label && <label className="block text-sm mb-1">{label}:</label>}
      <div 
        className="progress-container"
        role="progressbar"
        aria-valuenow={percentage}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={ariaLabel || label}
      >
        <div
          className={`progress-bar ${colorClass}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      {showPercentage && (
        <p className="mt-1 text-xs text-secondary">{percentage.toFixed(1)}%</p>
      )}
    </div>
  );
}
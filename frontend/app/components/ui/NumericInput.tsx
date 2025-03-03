import React from 'react';

interface NumericInputProps {
  id: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  className?: string;
}

/**
 * Reusable numeric input component with standardized styling
 * Used throughout the application for numeric configuration options
 */
export function NumericInput({
  id,
  value,
  onChange,
  min = 1,
  max = 1000,
  step = 1,
  disabled = false,
  className = ''
}: NumericInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    if (!isNaN(newValue)) {
      onChange(newValue);
    }
  };

  return (
    <input
      id={id}
      type="number"
      value={value}
      onChange={handleChange}
      min={min}
      max={max}
      step={step}
      disabled={disabled}
      className={`w-full rounded border border-[var(--input-border)] 
        bg-[var(--input-bg)] px-3 py-1.5 text-sm
        focus:border-[var(--input-focus-border)]
        focus:outline-none ${disabled ? 'opacity-50' : ''} ${className}`}
      aria-label={id}
    />
  );
}
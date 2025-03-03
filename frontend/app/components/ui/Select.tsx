import React from 'react';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  id: string;
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  disabled?: boolean;
  className?: string;
  placeholder?: string;
}

/**
 * Reusable select dropdown component with standardized styling
 * Used throughout the application for selecting options
 */
export function Select({
  id,
  value,
  onChange,
  options,
  disabled = false,
  className = '',
  placeholder
}: SelectProps) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <select
      id={id}
      value={value}
      onChange={handleChange}
      disabled={disabled}
      className={`w-full rounded border border-[var(--input-border)] 
        bg-[var(--input-bg)] px-3 py-1.5 text-sm appearance-none
        bg-[right_0.5rem_center] bg-[length:1.5em_1.5em] bg-no-repeat
        focus:border-[var(--input-focus-border)] 
        focus:outline-none ${disabled ? 'opacity-50' : ''} ${className}`}
      aria-label={id}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`
      }}
    >
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
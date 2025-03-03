import React from 'react';

interface ToggleProps {
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  className?: string;
}

/**
 * Reusable toggle switch component
 * Used throughout the application for boolean settings
 */
export function Toggle({
  id,
  checked,
  onChange,
  label,
  disabled = false,
  className = ''
}: ToggleProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  return (
    <div className={`flex items-center ${className}`}>
      <label htmlFor={id} className="inline-flex items-center cursor-pointer">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
          className="sr-only peer"
          aria-label={label || id}
        />
        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer 
          dark:bg-gray-700 peer-checked:after:translate-x-full after:content-[''] after:absolute 
          after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border 
          after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 
          peer-checked:bg-[var(--primary)]">
        </div>
        {label && (
          <span className="ml-3 text-sm font-medium">{label}</span>
        )}
      </label>
    </div>
  );
}
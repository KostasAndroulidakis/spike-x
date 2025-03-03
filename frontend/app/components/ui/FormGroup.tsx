import React from 'react';

interface FormGroupProps {
  label: string;
  htmlFor?: string;
  className?: string;
  children: React.ReactNode;
  helpText?: string;
}

/**
 * Reusable form group component with label and optional help text
 * Ensures consistent styling and accessibility for form controls
 */
export function FormGroup({ 
  label, 
  htmlFor, 
  className = '', 
  children,
  helpText
}: FormGroupProps) {
  return (
    <div className={`mb-4 ${className}`}>
      <label 
        htmlFor={htmlFor} 
        className="block text-sm mb-1 font-medium"
      >
        {label}
      </label>
      {children}
      {helpText && (
        <p className="mt-1 text-xs text-secondary">{helpText}</p>
      )}
    </div>
  );
}
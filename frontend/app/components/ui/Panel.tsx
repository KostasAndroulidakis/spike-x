import React from 'react';

interface PanelProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * Reusable panel component with an optional title
 * Used for consistent UI sections throughout the application
 */
export function Panel({ title, children, className = '' }: PanelProps) {
  return (
    <div className={`panel flex flex-col ${className}`}>
      {title && <h2 className="panel-header">{title}</h2>}
      {children}
    </div>
  );
}
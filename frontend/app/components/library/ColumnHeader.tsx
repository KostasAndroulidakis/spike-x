import React from 'react';

interface ColumnHeaderProps {
  icon: React.ReactNode;
  title: string;
  className?: string;
}

export default function ColumnHeader({ 
  icon, 
  title,
  className = ''
}: ColumnHeaderProps) {
  return (
    <div className={`flex items-center mb-3 ${className}`}>
      <div className="mr-4">{icon}</div>
      <h2 className="panel-header m-0">{title}</h2>
    </div>
  );
}
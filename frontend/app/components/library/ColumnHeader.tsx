import React from 'react';

interface ColumnHeaderProps {
  icon: React.ReactNode;
  title: string;
}

export default function ColumnHeader({ 
  icon, 
  title 
}: ColumnHeaderProps) {
  return (
    <div className="flex items-center mb-4">
      <div className="mr-4">{icon}</div>
      <h2 className="text-2xl font-semibold text-[var(--text)]">{title}</h2>
    </div>
  );
}
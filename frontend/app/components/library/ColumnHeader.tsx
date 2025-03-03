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
    <div className="flex items-center">
      <div className="mr-4">{icon}</div>
      <h2 className="panel-header">{title}</h2>
    </div>
  );
}
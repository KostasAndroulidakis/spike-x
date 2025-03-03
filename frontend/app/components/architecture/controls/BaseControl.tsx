import React from 'react';
import { 
  FormGroup, 
  NumericInput, 
  Select, 
  Toggle 
} from '../../ui';

export interface BaseControlProps {
  count: number;
  type: string;
  typeOptions: { value: string, label: string }[];
  onUpdate: (key: string, value: any) => void;
  enabled?: boolean;
  onToggle?: (enabled: boolean) => void;
  title: string;
  countLabel?: string;
  typeLabel?: string;
  toggleLabel?: string;
  countMin?: number;
  countMax?: number;
}

/**
 * Base control component for neural network elements
 * Provides consistent UI for count and type selection with optional toggle
 */
export function BaseControl({
  count,
  type,
  typeOptions,
  onUpdate,
  enabled,
  onToggle,
  title,
  countLabel = 'Count',
  typeLabel = 'Type',
  toggleLabel = 'Enable',
  countMin = 1,
  countMax = 1000
}: BaseControlProps) {
  const handleCountChange = (newCount: number) => {
    onUpdate('count', newCount);
  };

  const handleTypeChange = (newType: string) => {
    onUpdate('type', newType);
  };

  return (
    <div className="panel">
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      
      {onToggle !== undefined && (
        <div className="mb-3">
          <Toggle
            id={`${title.toLowerCase()}-toggle`}
            checked={enabled ?? false}
            onChange={onToggle}
            label={toggleLabel}
          />
        </div>
      )}
      
      <div className={`grid grid-cols-2 gap-4 ${onToggle !== undefined && !enabled ? 'opacity-50' : ''}`}>
        <FormGroup label={countLabel} htmlFor={`${title.toLowerCase()}-count`}>
          <NumericInput
            id={`${title.toLowerCase()}-count`}
            value={count}
            onChange={handleCountChange}
            min={countMin}
            max={countMax}
            disabled={onToggle !== undefined && !enabled}
          />
        </FormGroup>
        
        <FormGroup label={typeLabel} htmlFor={`${title.toLowerCase()}-type`}>
          <Select
            id={`${title.toLowerCase()}-type`}
            value={type}
            onChange={handleTypeChange}
            options={typeOptions}
            disabled={onToggle !== undefined && !enabled}
          />
        </FormGroup>
      </div>
    </div>
  );
}
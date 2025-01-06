// app/components/architecture/controls/NeuronControls.tsx
// components/architecture/controls/NeuronControls.tsx
import React from 'react';

interface NeuronControlsProps {
  neurons: number;
  neuronType: string;
  onUpdate: (key: string, value: any) => void;
}

const NeuronControls: React.FC<NeuronControlsProps> = ({
  neurons,
  neuronType,
  onUpdate,
}) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {/* Total Neurons */}
      <div>
        <label className="block mb-1 text-[var(--text)]">Total Neurons:</label>
        <input
          type="number"
          className="w-full p-2 border rounded bg-[var(--background)] text-[var(--text)] border-[var(--secondary)]"
          value={neurons}
          onChange={(e) =>
            onUpdate("neurons", parseInt(e.target.value, 10))
          }
        />
      </div>

      {/* Neuron Type */}
      <div>
        <label className="block mb-1 text-[var(--text)]">Neuron Type:</label>
        <select
          className="w-full p-2 border rounded bg-[var(--background)] text-[var(--text)] border-[var(--secondary)]"
          value={neuronType}
          onChange={(e) =>
            onUpdate("neuronType", e.target.value)
          }
        >
          <option value="LIF">LIF</option>
          <option value="Izhikevich">Izhikevich</option>
          <option value="Hodgkin-Huxley">Hodgkin-Huxley</option>
        </select>
      </div>
    </div>
  );
};

export default NeuronControls;
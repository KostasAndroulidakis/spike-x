// components/architecture/controls/SynapsesControls.tsx
import React from 'react';

interface SynapsesControlsProps {
  synapses: number;
  synapseType: string;
  onUpdate: (key: string, value: any) => void;
}

const SynapsesControls: React.FC<SynapsesControlsProps> = ({
  synapses,
  synapseType,
  onUpdate,
}) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {/* Total Synapses */}
      <div>
        <label className="block mb-1 text-[var(--text)]">Total Synapses:</label>
        <input
          type="number"
          className="w-full p-2 border rounded bg-[var(--background)] text-[var(--text)] border-[var(--secondary)]"
          value={synapses}
          onChange={(e) =>
            onUpdate("synapses", parseInt(e.target.value, 10))
          }
        />
      </div>

      {/* Synapse Type */}
      <div>
        <label className="block mb-1 text-[var(--text)]">Synapse Type:</label>
        <select
          className="w-full p-2 border rounded bg-[var(--background)] text-[var(--text)] border-[var(--secondary)]"
          value={synapseType}
          onChange={(e) =>
            onUpdate("synapseType", e.target.value)
          }
        >
          <option value="STDP">STDP</option>
          <option value="R-STDP">R-STDP</option>
          <option value="Hodgkin-Huxley">Hodgkin-Huxley</option>
          <option value="AdEx">AdEx</option>
          <option value="LIF">LIF</option>
          <option value="SRM">SRM</option>
        </select>
      </div>
    </div>
  );
};

export default SynapsesControls;
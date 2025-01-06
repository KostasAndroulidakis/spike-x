// components/architecture/layers/LayerCard.tsx
import React from 'react';
import NeuronControls from '../controls/NeuronControls';
import SynapsesControls from '../controls/SynapseControls';
import AxonControls from '../controls/AxonControls';
import DendritesControls from '../controls/DendriteControls';
import LayerVariables from '../controls/LayerVariables';
import LayerHeader from './LayerHeader';
import DeleteLayerButton from './DeleteLayerButton';

interface LayerProps {
  layer: {
    name: string;
    neurons: number;
    neuronType: string;
    synapses: number;
    synapseType: string;
    synapticConnectionType: string;
    synapticConnectionTypeEnabled: boolean;
    axons: number;
    axonType: string;
    dendrites: number;
    dendriteType: string;
    axonsEnabled: boolean;
    dendritesEnabled: boolean;
    membranePotentialEnabled: boolean;
    membranePotential: number;
    synapticConstantsEnabled: boolean;
    synapticConstants: number;
  };
  isOpen: boolean;
  onToggle: () => void;
  onUpdate: (key: string, value: any) => void;
  showDeleteButton?: boolean;
  onDelete?: () => void;
}

const LayerCard: React.FC<LayerProps> = ({
  layer,
  isOpen,
  onToggle,
  onUpdate,
  showDeleteButton = true,
  onDelete
}) => {
  return (
    <div className="p-4 border border-[var(--nav-bg)] rounded bg-[var(--nav-bg)] transition-colors duration-200 shadow-lg">
      <LayerHeader 
        name={layer.name}
        isOpen={isOpen}
        onToggle={onToggle}
      />

      {/* Layer Settings */}
      {isOpen && (
        <div className="mt-4 space-y-6">
          {/* Neurons & Synapses */}
          <div className="grid grid-cols-2 gap-4">
            <NeuronControls
              neurons={layer.neurons}
              neuronType={layer.neuronType}
              onUpdate={onUpdate}
            />
            <SynapsesControls
              synapses={layer.synapses}
              synapseType={layer.synapseType}
              onUpdate={onUpdate}
            />
          </div>

          {/* Axons & Dendrites */}
          <div className="flex space-x-4">
            <AxonControls
              axons={layer.axons}
              axonType={layer.axonType}
              axonsEnabled={layer.axonsEnabled}
              onUpdate={onUpdate}
            />
            <DendritesControls
              dendrites={layer.dendrites}
              dendriteType={layer.dendriteType}
              dendritesEnabled={layer.dendritesEnabled}
              onUpdate={onUpdate}
            />
          </div>

          {/* Layer Variables */}
          <LayerVariables
            membranePotential={layer.membranePotential}
            membranePotentialEnabled={layer.membranePotentialEnabled}
            synapticConstants={layer.synapticConstants}
            synapticConstantsEnabled={layer.synapticConstantsEnabled}
            synapticConnectionType={layer.synapticConnectionType}
            synapticConnectionTypeEnabled={layer.synapticConnectionTypeEnabled}
            onUpdate={onUpdate}
          />

          {/* Delete Layer Button */}
          {showDeleteButton && onDelete && (
            <DeleteLayerButton onDelete={onDelete} />
          )}
        </div>
      )}
    </div>
  );
};

export default LayerCard;
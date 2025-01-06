// app/routes/architecture.tsx
import LayerCard from "../components/architecture/layers/LayerCard";
import { useLayerManager } from "../components/architecture/hooks/useLayerManager";
import AddLayerButton from "../components/architecture/layers/AddLayerButton";

export default function Architecture() {
  const { layers, openLayers, addLayer, updateLayer, deleteLayer, toggleLayer } = 
    useLayerManager();

  return (
    <div className="p-4 max-w-screen-lg mx-auto">
      <div className="space-y-6">
        {layers.map((layer, index) => (
          <LayerCard
            key={index}
            layer={layer}
            isOpen={openLayers[index]}
            onToggle={() => toggleLayer(index)}
            onUpdate={(key, value) => updateLayer(index, key, value)}
            showDeleteButton={index !== 0 && index !== layers.length - 1}
            onDelete={() => deleteLayer(index)}
          />
        ))}
      </div>

      <AddLayerButton onClick={addLayer} />
    </div>
  );
};
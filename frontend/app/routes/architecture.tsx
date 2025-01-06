import LayerCard from "../components/architecture/layers/LayerCard";
import { useLayerManager } from "../components/architecture/hooks/useLayerManager";

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
            onDelete={
              index !== 0 && index !== layers.length - 1
                ? () => deleteLayer(index)
                : undefined
            }
          />
        ))}
      </div>

      <div className="flex justify-center">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
          onClick={addLayer}
        >
          Add Layer
        </button>
      </div>
    </div>
  );
}
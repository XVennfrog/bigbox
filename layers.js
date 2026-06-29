export function addOverlaySources (map, sourceConfigs) {
  sourceConfigs.forEach(({id, source}) => {
    if (!map.getSource(id)) {
      map.addSource(id, source);
    }
  });
}

export function addOverlayLayers (map, layerConfigs) {
  layerConfigs.forEach(layerConfig => {
    if (map.getLayer(layerConfig.id)) {
      console.warn(`Layer already exists, skipping: ${layerConfig.id}`);
      return;
    }

  const {legend, ...mapboxLayerConfig} = layerConfig;

  try {
        map.addLayer(mapboxLayerConfig);
        console.log(`Added layer: ${mapboxLayerConfig.id}`);
      } catch (error) {
        console.error(`Failed to add layer: ${mapboxLayerConfig.id}`, error);
      } 
  });
}
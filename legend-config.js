import { layerConfigs } from './layers-config.js';

function getLegendSymbol(layerConfig) {
  if (layerConfig.legend?.symbol) {
    return layerConfig.legend.symbol;
  }

  if (layerConfig.type === 'symbol') return 'point';
  if (layerConfig.type === 'line') return 'line';
  if (layerConfig.type === 'fill') return 'fill';

  return 'fill';
}

function getLegendColor(layerConfig) {
  if (layerConfig.legend?.color) {
    return layerConfig.legend.color;
  }

  if (layerConfig.type === 'symbol') {
    return layerConfig.paint?.['circle-color'] || '#999999';
  }

  if (layerConfig.type === 'line') {
    return layerConfig.paint?.['line-color'] || '#999999';
  }

  if (layerConfig.type === 'fill') {
    return layerConfig.paint?.['fill-color'] || '#999999';
  }

  return '#999999';
}

function buildLegendLayer(layerConfig) {
  const legend = layerConfig.legend;

  if (!legend) {
    return null;
  }

  return {
    label: legend.label || layerConfig.id,
    checkboxId: legend.checkboxId,
    layerIds: legend.layerIds || [layerConfig.id],
    legendType: legend.legendType || 'single',
    symbol: getLegendSymbol(layerConfig),
    color: getLegendColor(layerConfig),
    defaultVisible: legend.defaultVisible ?? false,
    stops: legend.stops || null
  };
}

export function buildLegendConfigFromLayers(layerConfigs) {
  const ungroupedLayers =[];
  const groupsByTitle = new Map();

  layerConfigs.forEach(layerConfig => {
    if (!layerConfig.legend) return;
    
    const legendLayer = buildLegendLayer(layerConfig);
    if(!legendLayer) return;

    const groupTitle = layerConfig.legend.group;

    if(!groupTitle){
      ungroupedLayers.push(legendLayer);
      return;
    }

    if (!groupsByTitle.has(groupTitle)) {
      groupsByTitle.set(groupTitle, {
        title: groupTitle,
        open: layerConfig.legend.open ?? true,
        layers: []
      });
    }
    
    groupsByTitle.get(groupTitle).layers.push(legendLayer);
    
  });

  return {
    ungroupedLayers,
    groups: Array.from(groupsByTitle.values())
  };
}

export const legendConfig = buildLegendConfigFromLayers(layerConfigs);
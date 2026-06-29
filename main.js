import { sourceConfigs } from './sources-config.js';
import { layerConfigs } from './layers-config.js';
import { legendConfig } from './legend-config.js';
import { popupConfigs } from './popup-config.js';

import { addOverlaySources, addOverlayLayers } from './layers.js';
import { buildLegend } from './legend.js';
import { setupPopups } from './popups.js';

mapboxgl.accessToken = 'pk.eyJ1IjoicGV0cm9sYXR1bSIsImEiOiJjbXFmanAzdDYxbjdvMnFxMzVuMWo4cW43In0.7XRGgEj6Y1Jl_0WWuwoLhA';
  const mapboxMap = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v11',
    center: [-79.942174, 40.435376],
    zoom: 10,
    localIdeographFontFamily: '"acumin-pro", sans-serif'
  });

  window.mapboxMap = mapboxMap;

mapboxMap.on ('load', () => {

  //map.addControl(new mapboxgl.NavigationControl());

  const searchBox = new MapboxSearchBox();
  searchBox.accessToken = mapboxgl.accessToken;
  searchBox.options ={
    types:'address,poi',
    proximity: [-79.99, 40.44]
  };
  mapboxMap.addControl(searchBox,'top-right');

  addOverlaySources(mapboxMap, sourceConfigs);
  addOverlayLayers(mapboxMap, layerConfigs);

  buildLegend(legendConfig, mapboxMap);
  setupPopups(popupConfigs, mapboxMap);

  document.getElementById('map')?.classList.remove('is-loading');
});
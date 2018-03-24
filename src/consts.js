export const CANVAS_DIMENSION = 600;
export const DEFAULT_ZOOM = 200;
export const DEFAULT_PANX = 2;
export const DEFAULT_PANY = 1.5;
export const DEFAULT_RESOLUTION = 100;

export const NODE_IDS = {
  zoom: 'zoom',
  panX: 'panX',
  panY: 'panY',
  resolution: 'resolution',
  zoomDisplay: 'zoomDisplay',
  panXDisplay: 'panXDisplay',
  panYDisplay: 'panYDisplay',
  resolutionDisplay: 'resolutionDisplay'
};

export const htmlElements = [
  {
    changableNodeId: NODE_IDS.zoom,
    displayNodeId: NODE_IDS.zoomDisplay,
    defaultValue: DEFAULT_ZOOM
  },
  {
    changableNodeId: NODE_IDS.panX,
    displayNodeId: NODE_IDS.panXDisplay,
    defaultValue: DEFAULT_PANX
  },
  {
    changableNodeId: NODE_IDS.panY,
    displayNodeId: NODE_IDS.panYDisplay,
    defaultValue: DEFAULT_PANY
  },
  {
    changableNodeId: NODE_IDS.resolution,
    displayNodeId: NODE_IDS.resolutionDisplay,
    defaultValue: DEFAULT_RESOLUTION
  }
];

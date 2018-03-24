import 'milligram';
import './style.css';
import {
  CANVAS_DIMENSION,
  DEFAULT_ZOOM,
  DEFAULT_PANX,
  DEFAULT_PANY,
  DEFAULT_RESOLUTION,
  NODE_IDS,
  htmlElements
} from './consts';
import checkIfBelongsToMandelbrotSet from './is-in-mandlebrot-set';

function draw(
  canvas,
  context,
  {
    zoom = DEFAULT_ZOOM,
    panX = DEFAULT_PANX,
    panY = DEFAULT_PANY,
    resolution = DEFAULT_RESOLUTION
  } = {}
) {
  const MAX_ITERATIONS = resolution;

  for (let x = 0; x < canvas.width; x++) {
    for (let y = 0; y < canvas.height; y++) {
      const belongsToSet = checkIfBelongsToMandelbrotSet(
        x / zoom - panX,
        y / zoom - panY,
        MAX_ITERATIONS
      );

      if (belongsToSet === 0) {
        context.fillStyle = '#000';
        context.fillRect(x, y, 1, 1); // Draw a black pixel
      } else {
        context.fillStyle = `hsl(0, 100%, ${belongsToSet}%)`;
        context.fillRect(x, y, 1, 1); // Draw a colorful pixel
      }
    }
  }
}

(function main() {
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');

  canvas.width = CANVAS_DIMENSION;
  canvas.height = CANVAS_DIMENSION;

  const elementsWithNode = htmlElements.reduce((elements, element) => {
    const changableNode = document.getElementById(element.changableNodeId);
    changableNode.value = element.defaultValue;
    const displayNode = document.getElementById(element.displayNodeId);
    displayNode.innerHTML = element.defaultValue;

    return Object.assign(elements, {
      [element.changableNodeId]: {
        changableNode,
        displayNode
      }
    });
  }, {});

  const drawConfig = {
    zoom: elementsWithNode[NODE_IDS.zoom].changableNode.value,
    panX: elementsWithNode[NODE_IDS.panX].changableNode.value,
    panY: elementsWithNode[NODE_IDS.panY].changableNode.value,
    resolution: elementsWithNode[NODE_IDS.resolution].changableNode.value
  };
  for (const element in elementsWithNode) {
    elementsWithNode[element].changableNode.onchange = ({
      target: { value }
    }) => {
      elementsWithNode[element].displayNode.innerHTML = value;
      draw(canvas, context, Object.assign(drawConfig, { [element]: value }));
    };
  }

  draw(canvas, context);
})();

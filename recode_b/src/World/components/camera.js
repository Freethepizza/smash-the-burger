import { PerspectiveCamera } from 'https://cdn.skypack.dev/three@0.132.2';

function createCamera() {
  const camera = new PerspectiveCamera(35, 1, 0.1, 100);

  camera.position.set(-0.5, 3, 6.5);

  return camera;
}

export { createCamera };

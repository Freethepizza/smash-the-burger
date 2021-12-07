import { loadBirds } from './components/birds/birds.js';
import { createCamera } from './components/camera.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';
import { createControls } from './systems/controls.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';
import {Animator} from './animator.js';
import { mesh } from './core.js';
import './core.js';

let camera;
let controls;
let renderer;
let scene;
let loop;

class World {
  constructor(container) {
    camera = createCamera();
    renderer = createRenderer();
    scene = createScene();
    loop = new Loop(camera, scene, renderer);
    container.append(renderer.domElement);
    controls = createControls(camera, renderer.domElement);

    const { ambientLight, mainLight } = createLights();

    loop.updatables.push(controls);
    scene.add(ambientLight, mainLight);

    const resizer = new Resizer(container, camera, renderer);
  }

  async init() {
    const { kitchen, burger, skater, rapper, muppie, gamer, chef } = await loadBirds();
    scene.add(kitchen, burger, skater, rapper, muppie, gamer, chef,mesh);
    
  }
  
  render() {
    renderer.render(scene, camera);
    
    
  }

  start() {
    loop.start();
    const animator = new Animator(scene);
    animator.animate();
  }

  stop() {
    loop.stop();
  }
}

export { World };

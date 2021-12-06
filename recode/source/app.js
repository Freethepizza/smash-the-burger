import * as THREE from "./dependencies/three.module.js";
import {burger,addAssets,setIronHitbox} from "./assets.js";
(async () =>{
    const scene = new THREE.Scene()
    addAssets(scene);
    const ironHitbox = setIronHitbox();
    scene.add(ironHitbox);
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
    directionalLight.position.set(4,4,0)
    scene.add(directionalLight);

    const width = 4;
    const height = width * (window.innerHeight/window.innerWidth);
    const camera = new THREE.OrthographicCamera(width / -2,width / 2,height / 2,height / -2, 1, 100);
    camera.position.set(.2,2,4);
    camera.lookAt(0,0,0);

    const renderer = new THREE.WebGLRenderer({antialias: true,alpha: true});
    renderer.setSize(window.innerWidth, window.innerHeight);

    var clock = new THREE.Clock();

    var delta = 0;
    
    const tick = function() {
        //controls.update()
        delta = clock.getDelta();
        requestAnimationFrame(tick);
        render();
    }
    burger.animate(delta)

    const render = () => {renderer.render(scene,camera)}
    tick();
    document.body.appendChild(renderer.domElement)
})()
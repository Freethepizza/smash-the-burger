import { Clock } from 'https://cdn.skypack.dev/three@0.132.2';
import * as THREE from '../dependencies/three.module.js';
import { ironHitbox, Singleton } from '../core.js';


const clock = new Clock();
var burgerHitBox;
var rapperHitBox;
var skaterHitBox;
var muppieHitBox;
var gamerHitBox;
var score = 0

class Loop {
  constructor(camera, scene, renderer) {
    this.camera = camera;
    this.scene = scene;
    this.renderer = renderer;
    this.updatables = [];
  }

  update(){
    burgerHitBox = new THREE.Box3().setFromObject(this.scene.getObjectByName('burger'));
    rapperHitBox = new THREE.Box3().setFromObject(this.scene.getObjectByName('rapper'));
    skaterHitBox = new THREE.Box3().setFromObject(this.scene.getObjectByName('skater'));
    muppieHitBox = new THREE.Box3().setFromObject(this.scene.getObjectByName('muppie'));
    gamerHitBox = new THREE.Box3().setFromObject(this.scene.getObjectByName('gamer'));
    
  }

  start() {
    this.renderer.setAnimationLoop(() => {
      // tell every animated object to tick forward one frame
      this.update()
      document.getElementById('score').innerText = score;
      this.tick();

      // render a frame
      this.renderer.render(this.scene, this.camera);
    });
  }

  

  stop() {
    this.renderer.setAnimationLoop(null);
  }

  tick() {
  
    // only call the getDelta function once per frame!
    const delta = clock.getDelta();


    // console.log(
    //   `The last frame rendered in ${delta * 1000} milliseconds`,
    // );
    
    for (const object of this.updatables) {
      object.tick(delta);
    }
  }
  
}

document.getElementById('scene-container').addEventListener('click', ()=>{
  if(burgerHitBox.intersectsBox(ironHitbox)){
    console.log('burger pass');
    score += 50;
  }else{
    //console.log('no pass');
  }

  if(rapperHitBox.intersectsBox(ironHitbox)){
    console.log('rapper pass');
    score += 200;
  }else{
    //console.log('no pass');
  }

  if(skaterHitBox.intersectsBox(ironHitbox)){
    console.log('skater pass');
    score += 500;
  }else{
    //console.log('no pass');
  }

  if(muppieHitBox.intersectsBox(ironHitbox)){
    console.log('muppie pass');
    score += 100;
  }else{
    //console.log('no pass');
  }

  if(gamerHitBox.intersectsBox(ironHitbox)){
    console.log('gamer pass');
    score += 300;
  }else{
    //console.log('no pass');
  }
})

export { Loop };

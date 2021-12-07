import * as THREE from './dependencies/three.module.js';






const geometry = new THREE.BoxGeometry( .02, .2, .2 );
const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
export const mesh = new THREE.Mesh( geometry, material );
mesh.position.set(0,.3,.77);
mesh.visible = false;
export const ironHitbox = new THREE.Box3().setFromObject(mesh)


import * as THREE from "./dependencies/three.module.js";

    //IRON HITBOX
    const geometry = new THREE.BoxGeometry( .7, .5, .5 );
    const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
    export const mesh = new THREE.Mesh( geometry, material );
    mesh.position.set(0,1,2.35);
    mesh.visible = false;
    //IRON HITBOX
    
    //PASSED IRON HITBOX
    const geometry2 = new THREE.BoxGeometry(.7,.5,.5);
    const material2 = new THREE.MeshBasicMaterial({color:0xffff0});
    export const mesh2 = new THREE.Mesh(geometry, material);
    mesh2.position.set(-1.2,1,-0.6);
    mesh2.visible=false;
    //PASSED IRON HITBOX
    
    //START HITBOX
    const geometry3 = new THREE.BoxGeometry(.7,.5,.5);
    const material3 = new THREE.MeshBasicMaterial({color:0xffff0});
    export const mesh3 = new THREE.Mesh(geometry, material);
    mesh3.position.set(1.2,.3,-0.6);
    mesh3.visible = false;
    //START HITBOX
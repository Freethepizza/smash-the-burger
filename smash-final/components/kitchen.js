import * as THREE from "../dependencies/three.module.js";
import {GLTFLoader} from "../dependencies/GLTFLoader.js";
import gsap from "../dependencies/gsap/index.js";

export let mixer = null;
let action = null;

export class Kitchen{
    constructor(manager,scene){
        this.modelUrl = "./models/kitchen.glb";
        this.scene = scene;
        this.manager = manager;
        this.onCreate();
        
    }
    onCreate(){
        new GLTFLoader(this.manager).load(
            this.modelUrl,
            gltf=>{
                gltf.scene.name = "kitchen";
                gltf.scene.position.set(0,0,0); 
                gltf.scene.scale.set(3.5,3.5,3.5);
                mixer = new THREE.AnimationMixer(gltf.scene);
                action = mixer.clipAction(gltf.animations[0]);
                action.setLoop(THREE.LoopOnce)
                console.log(gltf.animations[0])
                this.scene.add(gltf.scene);
            });
            
    }
    updateTransform(){
        
    }
    play(){
        action.play().reset()
    }
}
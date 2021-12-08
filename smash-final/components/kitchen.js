import * as THREE from "../dependencies/three.module.js";
import {GLTFLoader} from "../dependencies/GLTFLoader.js";
import gsap from "../dependencies/gsap/index.js";

export class Kitchen extends THREE.Group{
    constructor(manager){
        super();
        this.modelUrl = "../models/kitchen.glb";
        this.manager = manager;
        this.onCreate();
    }
    onCreate(){
        new GLTFLoader(this.manager).load(
            this.modelUrl,
            gltf=>{
                this.updateTransform();
                this.add(gltf.scene);
            });
    }
    updateTransform(){
        this.name = "kitchen";
        this.position.set(0,0,0); 
        this.scale.set(3.5,3.5,3.5);
    }
}
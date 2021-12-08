import * as THREE from "../dependencies/three.module.js";
import {GLTFLoader} from "../dependencies/GLTFLoader.js";
import gsap from "../dependencies/gsap/index.js";
import { boxBurger } from "../hitboxes.js";

export class Burger extends THREE.Group{
    constructor(manager){
        super();
        this.modelUrl = "./models/burger.glb";
        this.manager = manager;
        this.onCreate();
        this.isActive = false;
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
        this.name = "burger";
        this.position.set(1.1,0,-.8); 
        this.scale.set(.3,.3,.3);
    }
    animate(){
        const timeline = gsap.timeline({ease:'linear'});
        timeline.to(this.position,{y:1.25,duration:.3,ease:'linear'})
        timeline.add(()=>this.isActive=true)
        timeline.to(this.position,{z:2.6,duration:.8,ease:'linear'})
        timeline.to(this.rotation,{y:-1.5,duration:.05,ease:'linear'})
        timeline.to(this.position,{x:-1.25,duration:.8,ease:'linear'})
        timeline.add(()=>this.isActive=false)
        timeline.to(this.rotation,{y:-3.15,duration:.1,ease:'linear'})
        timeline.to(this.position,{z:-.8,duration:.8,ease:'linear'})
        timeline.to(this.position,{y:0,duration:.3,ease:'linear'})
        timeline.to(this.position,{x:1.3,duration:0,ease:'linear'})
        timeline.to(this.rotation,{y:0,duration:0,ease:'linear'})
    }
    update(){
          
    }
}
import * as THREE from "../dependencies/three.module.js";
import {GLTFLoader} from "../dependencies/GLTFLoader.js";
import gsap from "../dependencies/gsap/index.js";

export class Rapper extends THREE.Group{
    constructor(manager){
        super();
        this.modelUrl = "./models/rapper.glb";
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
        this.name = "rapper";
        this.position.set(1.25,0,-.8); 
        this.scale.set(.3,.3,.3);
    }
    animate(){
        const timeline = gsap.timeline({ease:'linear'});
        timeline.to(this.position,{y:1.25,duration:.3,ease:'linear'})
        timeline.to(this.position,{z:1.8,duration:.4,ease:'linear'})
        timeline.to(this.position,{z:2.6,duration:.4,ease:'linear'})
        timeline.to(this.rotation,{y:-1.5,duration:.05,ease:'linear'})
        timeline.to(this.position,{x:.65,duration:.16,ease:'linear'})
        timeline.to(this.position,{x:-1.4,duration:.54,ease:'linear'})
        timeline.to(this.rotation,{y:-3.15,duration:.1,ease:'linear'})
        timeline.to(this.position,{z:-.8,duration:.8,ease:'linear'})
        timeline.to(this.position,{y:0,duration:.3,ease:'linear'})
        timeline.to(this.position,{x:1.3,duration:0,ease:'linear'})
        timeline.to(this.rotation,{y:0,duration:0,ease:'linear'})
    }
    animate2(){
        const timeline = gsap.timeline({ease:'linear'});
        timeline.to(this.position,{y:1.25,duration:.3,ease:'linear'})
        timeline.to(this.position,{z:2.6,duration:.8,ease:'linear'})
        timeline.to(this.rotation,{y:-1.5,duration:.05,ease:'linear'})
        timeline.to(this.position,{x:-1.25,duration:.8,ease:'linear'})
        timeline.to(this.rotation,{y:-3.15,duration:.1,ease:'linear'})
        timeline.to(this.position,{z:-.8,duration:.8,ease:'linear'})
        timeline.to(this.position,{y:0,duration:.3,ease:'linear'})
        timeline.to(this.position,{x:1.3,duration:0,ease:'linear'})
        timeline.to(this.rotation,{y:0,duration:0,ease:'linear'})
    }
}
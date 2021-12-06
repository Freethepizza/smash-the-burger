import gsap from './dependencies/gsap/index.js';


export class Animator{
    constructor(scene){
        this.scene = scene;
        this.onCreate();
    }
    onCreate(){
        console.log(this.scene);
        const timeline = gsap.timeline({ease:'linear'})
        timeline.to(this.scene.getObjectByName('burger').position,{y:.36,duration:.8})
        timeline.to(this.scene.getObjectByName('burger').position,{z:.5,duration:.8})
        timeline.play()
    }
}
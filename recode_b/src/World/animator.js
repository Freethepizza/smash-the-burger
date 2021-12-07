import gsap from './dependencies/gsap/index.js';
import { Singleton } from './core.js';

function nextModel(last){
    var arr;
    if(last === 0){arr = [2,3,4];}
    else if(last === 1){arr = [0,2,3,4];}
    else if(last === 2){arr = [0,3,4];}
    else if(last === 3){arr = [0,2,4];}
    else if(last === 4){arr = [0,2,3]}
    return arr[Math.floor(Math.random() * (3-0) + 0)]
}

export class Animator{
    constructor(){
        this.scene = Singleton.scene;
        this.onCreate();
    }
    onCreate(){
        console.log(this.scene);
    }
    animate(){
        const timeline = gsap.timeline({ease:'linear'})
        timeline.to(this.scene.getObjectByName('burger').position,{y:.36,duration:.2,ease:'linear'})
        timeline.to(this.scene.getObjectByName('burger').position,{z:.75,duration:.8,ease:'linear'})
        timeline.to(this.scene.getObjectByName('burger').rotation,{y:-1.5,duration:.05,ease:'linear'})
        timeline.to(this.scene.getObjectByName('burger').position,{x:-.365,duration:.8,ease:'linear'})
        timeline.add(() =>this.modelSwitcher(0))
        timeline.to(this.scene.getObjectByName('burger').rotation,{y:-3,duration:.05,ease:'linear'})
        timeline.to(this.scene.getObjectByName('burger').position,{z:-.2,duration:.8,ease:'linear'})
        timeline.to(this.scene.getObjectByName('burger').position,{y:0,duration:.2,ease:'linear'})
        timeline.to(this.scene.getObjectByName('burger').position,{x:.325,duration:0,ease:'linear'})
        timeline.to(this.scene.getObjectByName('burger').rotation,{y:0,duration:0,ease:'linear'})
    }
    animate2(){
        const timeline = gsap.timeline({ease:'linear'})
        timeline.to(this.scene.getObjectByName('skater').position,{y:.36,duration:.2,ease:'linear'})
        timeline.to(this.scene.getObjectByName('skater').position,{z:.75,duration:.8,ease:'linear'})
        timeline.add(() =>this.modelSwitcher(1))
        timeline.to(this.scene.getObjectByName('skater').rotation,{y:-1.5,duration:.05,ease:'linear'})
        timeline.to(this.scene.getObjectByName('skater').position,{x:-.38,duration:.8,ease:'linear'})
        timeline.to(this.scene.getObjectByName('skater').rotation,{y:-3,duration:.05,ease:'linear'})
        timeline.to(this.scene.getObjectByName('skater').position,{z:-.2,duration:.8,ease:'linear'})
        timeline.to(this.scene.getObjectByName('skater').position,{y:0,duration:.2,ease:'linear'})
        timeline.to(this.scene.getObjectByName('skater').position,{x:.38,duration:0,ease:'linear'})
        timeline.to(this.scene.getObjectByName('skater').rotation,{y:0,duration:0,ease:'linear'})
    }
    animate3(){
        const timeline = gsap.timeline({ease:'linear'})
        timeline.to(this.scene.getObjectByName('rapper').position,{y:.36,duration:.2,ease:'linear'})
        timeline.to(this.scene.getObjectByName('rapper').position,{z:.75,duration:.6,ease:'linear'})
        timeline.to(this.scene.getObjectByName('rapper').rotation,{y:-1.5,duration:.05,ease:'linear'})
        timeline.to(this.scene.getObjectByName('rapper').position,{x:-.38,duration:.6,ease:'linear'})
        timeline.add(() =>this.modelSwitcher(2))
        timeline.to(this.scene.getObjectByName('rapper').rotation,{y:-3,duration:.1,ease:'linear'})
        timeline.to(this.scene.getObjectByName('rapper').position,{z:-.2,duration:.6,ease:'linear'})
        timeline.to(this.scene.getObjectByName('rapper').position,{y:0,duration:.05,ease:'linear'})
        timeline.to(this.scene.getObjectByName('rapper').position,{x:.38,duration:0,ease:'linear'})
        timeline.to(this.scene.getObjectByName('rapper').rotation,{y:0,duration:0,ease:'linear'})
    }
    animate4(){
        const timeline = gsap.timeline({ease:'linear'})
        timeline.to(this.scene.getObjectByName('muppie').position,{y:.36,duration:.2,ease:'linear'})
        timeline.to(this.scene.getObjectByName('muppie').position,{z:.75,duration:.5,ease:'linear'})
        timeline.to(this.scene.getObjectByName('muppie').rotation,{y:-1.5,duration:.05,ease:'linear'})
        timeline.to(this.scene.getObjectByName('muppie').position,{x:-.38,duration:.5,ease:'linear'})
        timeline.to(this.scene.getObjectByName('muppie').rotation,{y:-3,duration:.05,ease:'linear'})
        timeline.add(() =>this.modelSwitcher(3))
        timeline.to(this.scene.getObjectByName('muppie').position,{z:-.2,duration:.5,ease:'linear'})
        timeline.to(this.scene.getObjectByName('muppie').position,{y:0,duration:.05,ease:'linear'})
        timeline.to(this.scene.getObjectByName('muppie').position,{x:.38,duration:0,ease:'linear'})
        timeline.to(this.scene.getObjectByName('muppie').rotation,{y:0,duration:0,ease:'linear'})
    }
    animate5(){
        const timeline = gsap.timeline({ease:'linear'})
        timeline.to(this.scene.getObjectByName('gamer').position,{y:.36,duration:.2,ease:'linear'})
        timeline.to(this.scene.getObjectByName('gamer').position,{z:.75,duration:.8,ease:'linear'})
        timeline.to(this.scene.getObjectByName('gamer').rotation,{y:-1.5,duration:.05,ease:'linear'})
        timeline.to(this.scene.getObjectByName('gamer').position,{x:.15,duration:.1,delay:.5,ease:'linear'})
        timeline.to(this.scene.getObjectByName('gamer').position,{x:-.38,duration:.4,ease:'linear'})
        timeline.add(() =>this.modelSwitcher(4))
        timeline.to(this.scene.getObjectByName('gamer').rotation,{y:-3,duration:.05,ease:'linear'})
        timeline.to(this.scene.getObjectByName('gamer').position,{z:-.2,duration:.8,ease:'linear'})
        timeline.to(this.scene.getObjectByName('gamer').position,{y:0,duration:.2,ease:'linear'})
        timeline.to(this.scene.getObjectByName('gamer').position,{x:.38,duration:0,ease:'linear'})
        timeline.to(this.scene.getObjectByName('gamer').rotation,{y:0,duration:0,ease:'linear'})
    }
    modelSwitcher(lastNumber){
        var modelNumber = nextModel(lastNumber);
        switch(modelNumber){
            case 0:
                this.animate()
                break;
            case 1:
                this.animate2()
                break;
            case 2:
                this.animate3()
                break;
            case 3:
                this.animate4()
                break;
            case 4: 
                this.animate5()
                break;
        }
    }
}
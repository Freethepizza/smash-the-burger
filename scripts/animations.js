import gsap from './dependencies/gsap/index.js';
import { RGB_PVRTC_4BPPV1_Format } from './dependencies/three.module.js';

var smash;
export var currentModelName;
let timeline = gsap.timeline({ease: "linear"});

const burgerAnimation = (model) => {
    timeline.add(()=>{smash=false})
    timeline.to(model.position,{y:1.1,duration:.3,ease:'linear'})
    timeline.to(model.position,{z:2.2,duration:.8,ease:'linear'})
    timeline.to(model.rotation,{y:-1.5,duration:.1,ease:'linear'})
    timeline.to(model.position,{x:-1.1,duration:.8,ease:'linear'})
    timeline.to(model.rotation,{y:-3.2,duration:.1,ease:'linear'})
    timeline.to(model.position,{z:-0.6,duration:.8,ease:'linear'})
    timeline.to(model.position,{y:0,duration:.3,ease:'linear'})
    timeline.add(()=>{model.visible = false})
    timeline.to(model.rotation,{y:0,duration:.1,ease:'linear'})
    timeline.to(model.position,{x:1,duration:.1,ease:'linear'})
    timeline.add(()=>{model.visible = true})
    timeline.add(()=>unsetSmash(model))
}

const skaterAnimation = (model) => {
    timeline.add(()=>{smash=false})
    timeline.to(model.position,{y:1.1,duration:.3,ease:'linear'})
    timeline.to(model.position,{z:2.2,duration:.8,ease:'linear'})
    timeline.to(model.rotation,{y:-1.5,duration:.1,ease:'linear'})
    timeline.to(model.position,{x:.5,duration:.5,ease:'linear'})
    timeline.to(model.position,{x:-1.2,duration:.5,ease:'linear'})
    timeline.to(model.rotation,{y:-3.2,duration:.1,ease:'linear'})
    timeline.to(model.position,{z:-0.6,duration:.8,ease:'linear'})
    timeline.to(model.position,{y:0,duration:.3,ease:'linear'})
    timeline.add(()=>{model.visible = false})
    timeline.to(model.position,{x:1.12,duration:.1,ease:'linear'})
    timeline.to(model.rotation,{y:0,duration:.1,ease:'linear'})
    timeline.add(()=>{model.visible = true})
    timeline.add(()=>unsetSmash(model))
}

const rapperAnimation = (model) =>{
    timeline.add(()=>{smash=false})
    timeline.to(model.position,{y:1.1,duration:.3,ease:'linear'})
    timeline.to(model.position,{z:2.2,duration:.8,ease:'linear'})
    timeline.to(model.rotation,{y:-1.5,duration:.1,ease:'linear'})
    timeline.to(model.position,{x:.6,duration:.5,ease:'linear'}, "+=.5")
    timeline.to(model.position,{x:.55,duration:.5,ease:'linear'}, "+=.5")
    timeline.to(model.position,{x:-1.2,duration:.5,ease:'linear'})
    timeline.to(model.rotation,{y:-3.2,duration:.1,ease:'linear'})
    timeline.to(model.position,{z:-0.6,duration:.8,ease:'linear'})
    timeline.to(model.position,{y:0,duration:.3,ease:'linear'})
    timeline.add(()=>{model.visible = false})
    timeline.to(model.position,{x:1.12,duration:.1,ease:'linear'})
    timeline.to(model.rotation,{y:0,duration:.1,ease:'linear'})
    timeline.add(()=>{model.visible = true})
    timeline.add(()=>unsetSmash(model))  
}

const muppieAnimation = (model) =>{

}

const gamerAnimation = (model) =>{

}

const smashAnimation = (model) =>{
    let timeline2 = gsap.timeline({ease: "linear"});
    timeline2.to(model.scale,{y:.1,duration:.1,ease:'linear'})
}

const unsetSmash = (model) =>{
    model.scale.y = .2;
}

/*
0 = basic
1 = skater
2 = rapper
3 = muppie
4 = gamer
*/

export const modelSwitcher = () =>{
    var modelNumber = Math.floor(Math.random() * 4)+0 ;
    switch(modelNumber){
        case 0:
            currentModelName = "burger"
            break;
        case 1:
            currentModelName = "skater"
            break;
        case 2:
            currentModelName = "rapper";
            break;
        case 3:
            currentModelName = "muppie";
            break;
        case 4: 
            currentModelName = "gamer";
            break;
    }
    return currentModelName
}

export class Animation{
    constructor(model){
        this.model = model;
    }
    output(){
        console.log(this.model.position.x, this.model.position.y, this.model.position.z)
    }
    startAnimation(){
        switch(this.model.name){
            case "burger":
                //console.log(`You are animating ${this.model.name}`);
                burgerAnimation(this.model);
                break;
            case "skater":
                //console.log(`You are animating ${this.model.name}`);
                skaterAnimation(this.model);
                break;
            case "rapper":
                //console.log(`You are animating ${this.model.name}`);
                rapperAnimation(this.model);
                break;
            case "muppie":
                //console.log(`You are animating ${this.model.name}`);
                burgerAnimation(this.model);
                break;
            case "muppie":
                //console.log(`You are animating ${this.model.name}`);
                burgerAnimation(this.model);
                break;
        }      
        }
    switchModel(newModel){
        this.model = newModel;
        return this.model
    }
    setSmash(){
        smash = true;
        smashAnimation(this.model);
        modelSwitcher();
    }
    unsetSmash(){
        smash = false;
        console.log('smashed ',smash );
    }
    smashStatus(){
        return smash;
    }
    smashAnim(){

    }
    stop(){
       timeline.kill(); 
    }
    play(){
        timeline.play();
    }
    getZ(){
        console.log(this.model.position.z)
    }
}
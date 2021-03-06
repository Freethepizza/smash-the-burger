import gsap from './dependencies/gsap/index.js';

var smash;
export var currentModelName;
let timeline = gsap.timeline({ease: "linear"});

const burgerAnimation = (model) => {
    timeline.add(()=>{smash=false})
    timeline.to(model.position,{y:1.1,duration:.8,ease:'linear'})
    timeline.to(model.position,{z:2.2,duration:.8,ease:'linear'})
    timeline.to(model.position,{x:-1.4,duration:.8,ease:'linear'})
    timeline.to(model.position,{z:-0.6,duration:.8,ease:'linear'})
    timeline.to(model.position,{y:0,duration:.8,ease:'linear'})
    timeline.to(model.position,{x:1.12,duration:.8,ease:'linear'})
    timeline.add(()=>unsetSmash(model))
}
const smashAnimation = (model) =>{
    let timeline2 = gsap.timeline({ease: "linear"});
    timeline2.to(model.scale,{y:.1,duration:.1,ease:'linear'})
}

const unsetSmash = (model) =>{
    model.scale.y = .3;
}


/*
0 = basic
1 = skater
2 = rapper
3 = muppie
4 = gamer

each model needs to have an animation
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
                console.log(`You are animating ${this.model.name}`);
                burgerAnimation(this.model);
                break;
            case "skater":
                console.log(`You are animating ${this.model.name}`);
                burgerAnimation(this.model);
                break;
            case "rapper":
                console.log(`You are animating ${this.model.name}`);
                burgerAnimation(this.model);
                break;
            case "muppie":
                console.log(`You are animating ${this.model.name}`);
                burgerAnimation(this.model);
                break;
            case "muppie":
                console.log(`You are animating ${this.model.name}`);
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
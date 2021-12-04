import gsap from './dependencies/gsap/index.js';
var smash;
const burgerAnimation = (model) => {
    let timeline = gsap.timeline({repeat:-1,ease: "linear"});
    timeline.add(()=>{smash=false})
    timeline.to(model.position,{y:1.1,duration:.8,ease:'linear'})
    timeline.to(model.position,{z:2.2,duration:.8,ease:'linear'})
    timeline.to(model.position,{x:-1.4,duration:.8,ease:'linear'})
    timeline.to(model.position,{z:-0.6,duration:.8,ease:'linear'})
    timeline.to(model.position,{y:0,duration:.8,ease:'linear'})
    timeline.add(()=>unsetSmash(model))
}
const smashAnimation = (model) =>{
    let timeline = gsap.timeline({ease: "linear"});
    timeline.to(model.scale,{y:.1,duration:.1,ease:'linear'})
}

const unsetSmash = (model) =>{
    model.scale.y = .3;
}

const modelSwitcher = () =>{

}

export class Animation{
    constructor(model){
        this.model = model;
    }
    output(){
        console.log(this.model.position.x, this.model.position.y, this.model.position.z)
    }
    startAnimation(){
        if(this.model.name == 'burger'){
            console.log(`You are animating ${this.model.name}`);
            burgerAnimation(this.model);
        }
    }
    setSmash(){
        smash = true;
        smashAnimation(this.model)
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
        
    }
    getZ(){
        console.log(this.model.position.z)
    }
}
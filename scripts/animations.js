<<<<<<< HEAD
import * as THREE from "./dependencies/three.module.js";
import gsap from "./dependencies/gsap/index.js";


var lastNumber;
var nextNumber;
=======
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
>>>>>>> parent of 8b7db4e (model switching added)

function randomExcluded(lastNumber) {
    var n = Math.floor(Math.random() * (3-0) + 0);
    if (n >= lastNumber) n++;
    return n;
}

<<<<<<< HEAD
function nextModel(last){
    var arr;
    if(last === 0){
        arr = [1,2,3,4];
       
    }
    else if(last === 1){
        arr = [0,2,3,4];
    }
    else if(last === 2){
        arr = [0,1,3,4];
    }
    else if(last === 3){
        arr = [0,1,2,4];
    }
    else if(last === 4){
        arr = [0,1,2,3]
    }
    return arr[Math.floor(Math.random() * (3-0) + 0)]
}
 
export const modelSwitcher = (delta) =>{
    var modelNumber = nextModel(lastNumber);
    console.log(lastNumber);
    console.log(modelNumber)
    switch(modelNumber){
        case 0:
            burger.animate(delta);
            console.log('burger');
            break;
        case 1:
            rapper.animate(delta);
            console.log('rapper');
            break;
        case 2:
            skater.animate(delta);
            console.log('skater');
            break;
        case 3:
            muppie.animate(delta);
            console.log('muppie');
            break;
        case 4: 
            gamer.animate(delta);
            console.log('gamer');
            break;
    }
=======
const modelSwitcher = () =>{

>>>>>>> parent of 8b7db4e (model switching added)
}

export class Burger{
    constructor(model,model_name,model_number){
        this.model_number = 0;
        this.model = model;
        this.model_name = 'burger';
        this.onCreate()
    }
    onCreate(){
        this.model.name = this.model_name;
        this.model.scale.set(.25,.25,.25);
        this.model.position.set(1,0,-.6);
    }
    animate(delta){
        const timeline = gsap.timeline({ease: "linear"});
        timeline.to(this.model.position,{y:1.1,duration:.3+delta,ease:'linear'})
        timeline.to(this.model.position,{z:2.2,duration:.8+delta,ease:'linear'})
        timeline.to(this.model.rotation,{y:-1.5,duration:.1+delta,ease:'linear'})
        timeline.to(this.model.position,{x:-1.1,duration:.8+delta,ease:'linear'})
        timeline.add(()=>lastNumber=this.model_number)
        timeline.add(()=>{modelSwitcher(delta)})
        timeline.to(this.model.rotation,{y:-3.2,duration:.1+delta,ease:'linear'})
        timeline.to(this.model.position,{z:-0.6,duration:.8+delta,ease:'linear'})
        timeline.to(this.model.position,{y:0,duration:.3+delta,ease:'linear'})
        timeline.add(()=>{this.model.visible = false})
        timeline.to(this.model.position,{x:1.12,duration:.1,ease:'linear'})
        timeline.to(this.model.rotation,{y:0,duration:.1,ease:'linear'})
        timeline.add(()=>{this.model.visible = true})
    }
    add(scene){
        scene.add(this.model)
    }
<<<<<<< HEAD
}

export class Rapper{//2 parones previos a pasar
    constructor(model,model_name,model_number){
        this.model_number = 1;
        this.model = rapperModel;
        this.model_name = 'rapper';
        this.onCreate();
    }
    onCreate(){
        this.model.name = this.model_name;
        this.model.scale.set(.25,.25,.25);
        this.model.position.set(1,0,-.6);
    }
    animate(delta){
        const timeline = gsap.timeline({ease: "linear"});
        timeline.to(this.model.position,{y:1.1,duration:.3+delta,ease:'linear'})
        timeline.to(this.model.position,{z:2.2,duration:.8+delta,ease:'linear'})
        timeline.to(this.model.rotation,{y:-1.5,duration:.1+delta,ease:'linear'})
        timeline.to(this.model.position,{x:-1.1,duration:.8+delta,ease:'linear'})
        timeline.add(()=>lastNumber=this.model_number)
        timeline.add(()=>{modelSwitcher(delta)})
        timeline.to(this.model.rotation,{y:-3.2,duration:.1+delta,ease:'linear'})
        timeline.to(this.model.position,{z:-0.6,duration:.8+delta,ease:'linear'})
        timeline.to(this.model.position,{y:0,duration:.3+delta,ease:'linear'})
        timeline.add(()=>{this.model.visible = false})
        timeline.to(this.model.position,{x:1.12,duration:.1,ease:'linear'})
        timeline.to(this.model.rotation,{y:0,duration:.1,ease:'linear'})
        timeline.add(()=>{this.model.visible = true})
    }
    add(scene){
        scene.add(this.model)
    }
}
=======
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
>>>>>>> parent of 8b7db4e (model switching added)

export class Skater{//acelera exponencialmente
    constructor(model,model_name,model_number){
        this.model_number = 2;
        this.model = skaterModel;
        this.model_name = 'skater';
        this.onCreate();
    }
    onCreate(){
        this.model.name = this.model_name;
        this.model.scale.set(.25,.25,.25);
        this.model.position.set(1,0,-.6);  
    }
    animate(delta){
        const timeline = gsap.timeline({ease: "linear"});
        timeline.to(this.model.position,{y:1.1,duration:.3+delta,ease:'linear'})
        timeline.to(this.model.position,{z:2.2,duration:.8+delta,ease:'linear'})
        timeline.to(this.model.rotation,{y:-1.5,duration:.1+delta,ease:'linear'})
        timeline.add(()=>lastNumber=this.model_number)
        timeline.add(()=>{modelSwitcher(delta)})
        timeline.to(this.model.position,{x:-1.1,duration:.8+delta,ease:'linear'})
        timeline.to(this.model.rotation,{y:-3.2,duration:.1+delta,ease:'linear'})
        timeline.to(this.model.position,{z:-0.6,duration:.8+delta,ease:'linear'})
        timeline.to(this.model.position,{y:0,duration:.3+delta,ease:'linear'})
        timeline.add(()=>{this.model.visible = false})
        timeline.to(this.model.position,{x:1.12,duration:.1,ease:'linear'})
        timeline.to(this.model.rotation,{y:0,duration:.1,ease:'linear'})
        timeline.add(()=>{this.model.visible = true})
        //timeline.add(()=>{modelSwitcher(delta,this.model_number)})
    }
<<<<<<< HEAD
    add(scene){
        scene.add(this.model)
    }
}

export class Muppie{//hace parón y sigue
    constructor(model,model_name,model_number){
        this.model_number = 3;
        this.model = muppieModel;
        this.model_name = 'muppie';
        this.onCreate();
    }
    onCreate(){
        this.model.name = this.model_name;
        this.model.scale.set(.25,.25,.25);
        this.model.position.set(1,0,-.6);
=======
    stop(){
        
>>>>>>> parent of 8b7db4e (model switching added)
    }
    animate(delta){
        const timeline = gsap.timeline({ease: "linear"});
        timeline.add(()=>lastNumber=this.model_number)
        timeline.to(this.model.position,{y:1.1,duration:.3+delta,ease:'linear'})
        timeline.to(this.model.position,{z:2.2,duration:.8+delta,ease:'linear'})
        timeline.to(this.model.rotation,{y:-1.5,duration:.1+delta,ease:'linear'})
        timeline.to(this.model.position,{x:-1.1,duration:.8+delta,ease:'linear'})
        timeline.to(this.model.rotation,{y:-3.2,duration:.1+delta,ease:'linear'})
        timeline.to(this.model.position,{z:-0.6,duration:.8+delta,ease:'linear'})
        timeline.to(this.model.position,{y:0,duration:.3+delta,ease:'linear'})
        timeline.add(()=>{this.model.visible = false})
        timeline.to(this.model.position,{x:1.12,duration:.1,ease:'linear'})
        timeline.to(this.model.rotation,{y:0,duration:.1,ease:'linear'})
        timeline.add(()=>{this.model.visible = true})
        timeline.add(()=>{modelSwitcher(delta)})
    }
    add(scene){
        scene.add(this.model)
    }
}

export class Gamer{
    constructor(model,model_name,model_number){
        this.model_number = 4;
        this.model = gamerModel;
        this.model_name = 'gamer';
        this.onCreate();
    }
    onCreate(){
        this.model.name = this.model_name;
        this.model.scale.set(.25,.25,.25);
        this.model.position.set(1,0,-.6);
    }
    animate(delta){//hace parón, vuelve y sigue
        const timeline = gsap.timeline({ease: "linear"});
        timeline.add(()=>lastNumber=this.model_number)
        timeline.to(this.model.position,{y:1.1,duration:.3+delta,ease:'linear'})
        timeline.to(this.model.position,{z:2.2,duration:.8+delta,ease:'linear'})
        timeline.to(this.model.rotation,{y:-1.5,duration:.1+delta,ease:'linear'})
        timeline.to(this.model.position,{x:-1.1,duration:.8+delta,ease:'linear'})
        timeline.to(this.model.rotation,{y:-3.2,duration:.1+delta,ease:'linear'})
        timeline.to(this.model.position,{z:-0.6,duration:.8+delta,ease:'linear'})
        timeline.to(this.model.position,{y:0,duration:.3+delta,ease:'linear'})
        timeline.add(()=>{this.model.visible = false})
        timeline.to(this.model.position,{x:1.12,duration:.1,ease:'linear'})
        timeline.to(this.model.rotation,{y:0,duration:.1,ease:'linear'})
        timeline.add(()=>{this.model.visible = true})
        timeline.add(()=>{modelSwitcher(delta)})
    }
    add(scene){
        scene.add(this.model)
    }
}

export class Kitchen{
    constructor(model,model_name){
        this.model = kitchenModel;
        this.model_name = 'kitchen';
        this.onCreate()
    }
    onCreate(){
        this.model.name = this.model_name;
        this.model.scale.set(3,3,3); 
    }
    animate(){

    }
    add(scene){
        scene.add(this.model)
    }
}

export class Chef{
    constructor(model,model_name){
        this.model = chefModel;
        this.model_name = 'kitchen';
        this.onCreate()
    }
    onCreate(){
        this.model.name = this.model_name;
        this.model.scale.set(1,1,1);
        this.model.position.set(-.5,0,0)
    }
    animate(){

    }
    add(scene){
        scene.add(this.model)
    }
}

export function setIronHitbox(){
    const geometry = new THREE.BoxGeometry( .7, .5, .5 );
    const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
    const mesh = new THREE.Mesh( geometry, material );
    mesh.position.set(0,1,2.35);
    mesh.scale.set(.7,1,1)
    return mesh;
}

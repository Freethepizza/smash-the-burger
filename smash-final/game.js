import gsap from "./dependencies/gsap/index.js"
import { Burger } from "./components/burger.js";

export class Game{
    constructor(burger,rapper,gamer,muppie,skater){
        this.burger = burger;
        this.rapper = rapper;
        this.gamer = gamer;
        this.muppie = muppie;
        this.skater = skater;
        //this.onCreate();
        this.lifes = 3; 
        this.score = 0;
    }
    onCreate(){

    }
    level1(){
        const timeline = gsap.timeline({ease:'linear'});
        timeline.add(()=>this.burger.animate());
        timeline.add(()=>this.rapper.animate2(),"+=1.8");
        timeline.add(()=>this.burger.animate(),"+=1.8");
        timeline.add(()=>this.rapper.animate2(),"+=1.8");
        timeline.add(()=>this.level2(), "+=2")
        
    }
    level2(){
        const timeline = gsap.timeline({ease:'linear'});
        timeline.add(()=>this.burger.animate());
        timeline.add(()=>this.muppie.animate(),"+=1.8");
        timeline.add(()=>this.rapper.animate2(),"+=1.8");
        timeline.add(()=>this.burger.animate(),"+=1.8");
        timeline.add(()=>this.level3(),"+=2")
    }
    level3(){
        const timeline = gsap.timeline({ease:'linear'});
        timeline.add(()=>this.burger.animate(),"+=1");
        timeline.add(()=>this.muppie.animate(),"+=1.8");
        timeline.add(()=>this.gamer.animate(),"+=1.8");
        timeline.add(()=>this.rapper.animate2(),"+=1.8");
        timeline.add(()=>timeline.kill())
    }
    allRandom(){

    }
    showLifes(){
        console.log(this.lifes)
    }
}
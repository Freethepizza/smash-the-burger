import gsap from "./dependencies/gsap/index.js"
import { Burger } from "./components/burger.js";



export class Game{
    constructor(burger,rapper,gamer,muppie,skater,manager){
        this.burger = burger;
        this.rapper = rapper;
        this.gamer = gamer;
        this.muppie = muppie;
        this.skater = skater;
        this.manager = manager;
        //this.onCreate();
        this.lifes = 3; 
        this.score = 0;
        this.over = false;
    }
    onCreate(){
    }
    checkLifes(){
        this.lifes === 0 ? this.over = true : this.over = false;
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
        timeline.add(()=>this.burger.animate(),"+=1.5");
        timeline.add(()=>this.muppie.animate(),"+=1.8");
        timeline.add(()=>this.gamer.animate(),"+=1.8");
        timeline.add(()=>this.rapper.animate2(),"+=1.8");
        timeline.add(()=>this.level4())
    }
    level4(){
        const timeline = gsap.timeline({ease:'linear'});
        timeline.add(()=>this.muppie.animate(),"+=2");
        timeline.add(()=>this.rapper.animate(),"+=1.8");
        timeline.add(()=>this.gamer.animate(),"+=1.8");
        timeline.add(()=>this.rapper.animate2(),"+=1.8");
        timeline.add(()=>timeline.kill())
    }
    level4(){
        const timeline = gsap.timeline({ease:'linear'});
        timeline.add(()=>this.burger.animate(),"+=2");
        timeline.add(()=>this.skater.animate(),"+=1.8");
        timeline.add(()=>this.rapper.animate2(),"+=1.8");
        timeline.add(()=>this.gamer.animate(),"+=1.8");
        timeline.add(()=>timeline.kill())
    }
    allRandom(){

    }
    showLifes(){
        console.log(this.lifes)
    }
}
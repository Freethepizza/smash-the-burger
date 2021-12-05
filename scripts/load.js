import * as THREE from "./dependencies/three.module.js";
import { GLTFLoader } from "./dependencies/GLTFLoader.js";
import gsap from "./dependencies/gsap/index.js";

export var loaded = [];
const loader = new GLTFLoader();


export async function loadAssets(){
    const [kitchenData, burgerData,rapperData,skaterData,muppieData,gamerData,chefData] = await Promise.all([
        loader.loadAsync("./assets/kitchen.glb"),
        loader.loadAsync("./assets/burger.glb"),
        loader.loadAsync("./assets/rapper.glb"),
        loader.loadAsync("./assets/skater.glb"),
        loader.loadAsync("./assets/muppie.glb"),
        loader.loadAsync("./assets/gamer.glb"),
        loader.loadAsync("./assets/chef.glb")
    ]);

    const kitchen = kitchenData.scene;
    kitchen.scale.set(3, 3, 3);
    kitchen.name = "kitchen";

    const burger = burgerData.scene;
    burger.name = "burger";
    burger.scale.set(.2, .2, .2);
    burger.position.set(1,0,-.6);

    const rapper = rapperData.scene;
    rapper.name = "rapper";
    rapper.scale.set(.2, .2, .2);
    rapper.position.set(1.12,0,-.6);

    const skater = skaterData.scene;
    skater.name = "skater";
    skater.scale.set(.2, .2, .2);
    skater.position.set(1.12,0,-.6);

    const muppie = muppieData.scene;
    muppie.name = "muppie";
    muppie.scale.set(.2, .2, .2);
    muppie.position.set(1.12,0,-.6);

    const gamer = gamerData.scene;
    gamer.name = "gamer";
    gamer.scale.set(.2, .2, .2);
    gamer.position.set(1.12,0,-.6);

    const chef = chefData.scene;
    chef.name = "chef";
    chef.scale.set(1,1,1);
    chef.position.set(-.5,0,1.2);

    return{
        kitchen,
        burger,
        rapper,
        skater,
        muppie,
        gamer,
        chef
    }
    
}

import * as THREE from "./dependencies/three.module.js";
import { GLTFLoader } from "./dependencies/GLTFLoader.js";
import gsap from "./dependencies/gsap/index.js";

export var loaded = [];
const loader = new GLTFLoader();


export async function loadAssets(){
    const [kitchenData, burgerData,trapperData,skaterData,muppieData,gamerData] = await Promise.all([
        loader.loadAsync("./assets/kitchen.glb"),
        loader.loadAsync("./assets/burger.glb"),
        loader.loadAsync("./assets/rapper.glb"),
        loader.loadAsync("./assets/skater.glb"),
        loader.loadAsync("./assets/muppie.glb"),
        //loader.loadAsync("./assets/nerd.glb"),
    ]);

    const kitchen = kitchenData.scene;
    kitchen.scale.set(3, 3, 3);
    kitchen.name = "kitchen";

    const burger = burgerData.scene;
    burger.name = "burger";
    burger.scale.set(.3, .3, .3);
    burger.position.set(1,0,-.6);

    return{
        kitchen,
        burger
    }
    
}

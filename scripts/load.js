import * as THREE from "./dependencies/three.module.js";
import { GLTFLoader } from "./dependencies/GLTFLoader.js";
import gsap from "./dependencies/gsap/index.js";

export var loaded = [];
const loader = new GLTFLoader();


export async function loadAssets(){
<<<<<<< HEAD
    const [kitchenData, burgerData,rapperData,skaterData,muppieData,gamerData,chefData] = await Promise.all([
=======
    const [kitchenData, burgerData,trapperData,skaterData,muppieData,gamerData] = await Promise.all([
>>>>>>> parent of 8b7db4e (model switching added)
        loader.loadAsync("./assets/kitchen.glb"),
        loader.loadAsync("./assets/burger.glb"),
        loader.loadAsync("./assets/rapper.glb"),
        loader.loadAsync("./assets/skater.glb"),
        loader.loadAsync("./assets/muppie.glb"),
<<<<<<< HEAD
        loader.loadAsync("./assets/gamer.glb"),
        loader.loadAsync("./assets/chef.glb")
=======
        //loader.loadAsync("./assets/nerd.glb"),
>>>>>>> parent of 8b7db4e (model switching added)
    ]);

    const kitchenModel = kitchenData.scene;
    kitchenModel.scale.set(3, 3, 3);
    kitchenModel.name = "kitchen";

    const burgerModel = burgerData.scene;
    burgerModel.name = "burger";
    burgerModel.scale.set(.25, .25, .25);
    burgerModel.position.set(1,0,-.6);

<<<<<<< HEAD
    const rapperModel = rapperData.scene;
    rapperModel.name = "rapper";
    rapperModel.scale.set(.25, .25, .25);
    rapperModel.position.set(1.12,0,-.6);

    const skaterModel = skaterData.scene;
    skaterModel.name = "skater";
    skaterModel.scale.set(.25, .25, .25);
    skaterModel.position.set(1.12,0,-.6);

    const muppieModel = muppieData.scene;
    muppieModel.name = "muppie";
    muppieModel.scale.set(.25, .25, .25);
    muppieModel.position.set(1.12,0,-.6);

    const gamerModel = gamerData.scene;
    gamerModel.name = "gamer";
    gamerModel.scale.set(.25, .25, .25);
    gamerModel.position.set(1.12,0,-.6);

    const chefModel = chefData.scene;
    chefModel.name = "chef";
    chefModel.scale.set(1,1,1);
    chefModel.position.set(-.5,0,1.2);

    return{
        kitchenModel,
        burgerModel,
        rapperModel,
        skaterModel,
        muppieModel,
        gamerModel,
        chefModel
=======
    return{
        kitchen,
        burger
>>>>>>> parent of 8b7db4e (model switching added)
    }
    
}

import * as THREE from "./dependencies/three.module.js";
import { GLTFLoader } from "./dependencies/GLTFLoader.js";

const loader = new GLTFLoader();

export async function loadAssets(){
    const [kitchenData, 
        burgerData,
        rapperData,
        skaterData,
        muppieData,
        gamerData,
        chefData] = await Promise.all([
            loader.loadAsync("../assets/kitchen.glb"),
            loader.loadAsync("../assets/burger.glb"),
            loader.loadAsync("../assets/rapper.glb"),
            loader.loadAsync("../assets/skater.glb"),
            loader.loadAsync("../assets/muppie.glb"),
            loader.loadAsync("../assets/gamer.glb"),
            loader.loadAsync("../assets/chef.glb") 
        ]);

        const [kitchenModel,
            burgerModel,
            rapperModel,
            skaterModel,
            muppieModel,
            gamerModel,
            chefModel] = [
            kitchenData.scene,
            burgerData.scene,
            rapperData.scene,
            skaterData.scene,
            muppieData.scene,
            gamerData.scene,
            chefData.scene
            ];
        
        return{
            kitchenModel,
            burgerModel,
            rapperModel,
            skaterModel,
            muppieModel,
            gamerModel,
            chefModel
        }
}
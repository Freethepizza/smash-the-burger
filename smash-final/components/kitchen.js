import * as THREE from "../dependencies/three.module.js";
import {GLTFLoader} from "../dependencies/GLTFLoader.js";
import gsap from "../dependencies/gsap/index.js";

const audioListener = new THREE.AudioListener();
const smashSound00 = new THREE.Audio(audioListener);
const smashSound01 = new THREE.Audio(audioListener);
const smashSound02 = new THREE.Audio(audioListener);
const smashSound03 = new THREE.Audio(audioListener);

function randomSfx(){
    var rnd = Math.floor(Math.random()*4);
    switch(rnd){
        case 0:
            smashSound00.play();
            break;
        case 1:
            smashSound01.play();
            break;
        case 2:
            smashSound02.play();
            break;
        case 3:
            smashSound03.play();
            break;
    }
}

export let mixer = null;
let action = null;

export class Kitchen{
    constructor(manager,scene){
        this.modelUrl = "./models/kitchen.glb";
        this.scene = scene;
        this.manager = manager;
        this.onCreate();
        this.loadSfx();
    }
    onCreate(){
        new GLTFLoader(this.manager).load(
            this.modelUrl,
            gltf=>{
                gltf.scene.name = "kitchen";
                gltf.scene.position.set(0,0,0); 
                gltf.scene.scale.set(3.5,3.5,3.5);
                mixer = new THREE.AnimationMixer(gltf.scene);
                action = mixer.clipAction(gltf.animations[0]);
                action.setLoop(THREE.LoopOnce)
                console.log(gltf.animations[0])
                this.scene.add(gltf.scene);
                console.log(gltf.scene)
            });    
    }
    loadSfx(){
        const sfxLoader = new THREE.AudioLoader(this.manager);
        sfxLoader.load('./sfx/smash0.mp3', (audioBuffer)=>{
            smashSound00.setBuffer(audioBuffer);
        });
        sfxLoader.load('./sfx/smash1.mp3', (audioBuffer)=>{
            smashSound01.setBuffer(audioBuffer);
        });
        sfxLoader.load('./sfx/smash2.mp3', (audioBuffer)=>{
            smashSound02.setBuffer(audioBuffer);
        });
        sfxLoader.load('./sfx/smash3.mp3', (audioBuffer)=>{
            smashSound03.setBuffer(audioBuffer);
        });
    }
    play(){
        action.play().reset();
        setTimeout(()=>randomSfx(),150)
        

    }
}
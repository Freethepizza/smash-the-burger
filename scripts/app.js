import * as THREE from "./dependencies/three.module.js";
import { GLTFLoader } from "./dependencies/GLTFLoader.js";
import {OrbitControls} from "./dependencies/OrbitControls.js";
import TWEEN, { Tween } from "./dependencies/tween.esm.js";
import {loadAssets} from "./load.js";
import { Animation, modelSwitcher } from "./animations.js";
import {mesh,mesh2,mesh3} from "./hitboxes.js";

(async () => {
    const scene = new THREE.Scene();
    //TESTS GO HERE START
    var score = 0;
    scene.add(mesh,mesh2,mesh3);
    //TESTS GO HERE END
    const animate = new Animation();
    //Loading

    const {kitchen, burger,rapper,skater,muppie,gamer} = await loadAssets();
    scene.add(kitchen,burger,rapper,skater,muppie,gamer);
    animate.model = burger;
    //animate.startAnimation()
    //Light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
    directionalLight.position.set(4,4,0)
    scene.add(directionalLight);

    //Camera
    const width = 4;
    const height = width * (812/375);
    const camera = new THREE.OrthographicCamera(width / -2,width / 2,height / 2,height / -2, 1, 100);
    camera.position.set(.2,2,4);
    camera.lookAt(0,0,0);
    //Main game
    function gameOn(){
        /* 
        - Basic
        - Nerd
        - Skater
        - Muppie
        */
    }

    //Renderer
    animate.startAnimation()
    var currentModel = burger;
    const renderer = new THREE.WebGLRenderer({antialias: true,alpha: true});
    renderer.setSize(375, 812);
    var controls = new OrbitControls( camera, renderer.domElement );
    var burgerHitbox = new THREE.Box3().setFromObject(currentModel);
    var kitchenHitbox = new THREE.Box3().setFromObject(mesh);
    var passedIronHitbox = new THREE.Box3().setFromObject(mesh2);
    var startHitbox = new THREE.Box3().setFromObject(mesh3);
    //Tick
    var isExecuted = false;
    const clock = new THREE.Clock();
    const tick = function() {
        controls.update()
        requestAnimationFrame(tick);
        render();
        document.getElementById("points").innerText = score;  
        burgerHitbox.setFromObject(currentModel);
        kitchenHitbox.setFromObject(mesh);
        if(burgerHitbox.intersectsBox(passedIronHitbox) && isExecuted==false && animate.smashStatus()==false){
            score -=1;
            isExecuted=true;
        }else if(burgerHitbox.intersectsBox(startHitbox) && isExecuted == true){
            isExecuted=false;
            currentModel = animate.switchModel(scene.getObjectByName(modelSwitcher()));
            burgerHitbox.setFromObject(currentModel);
            console.log(currentModel);
            animate.startAnimation();
        }else if(burgerHitbox.intersectsBox(passedIronHitbox) && isExecuted==false){
            isExecuted=true;        
        }
    }

    const render = () => {renderer.render(scene,camera)}
    tick();



    renderer.domElement.addEventListener("click", () =>{
        if(kitchenHitbox.intersectsBox(burgerHitbox)){
            score+=1;
            animate.setSmash();
        }else{
            animate.unsetSmash();
            console.log("no hit");
            document.querySelector(".ui-board").style = "z-index:0;display:flex";
            document.getElementById("score").innerText = score;
        }
        
        
    })  
    document.getElementById("points").innerText = score;
    document.body.appendChild(renderer.domElement)

})()
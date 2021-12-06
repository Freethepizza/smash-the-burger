import * as THREE from "./dependencies/three.module.js";
import { GLTFLoader } from "./dependencies/GLTFLoader.js";
import {OrbitControls} from "./dependencies/OrbitControls.js";
import TWEEN, { Tween } from "./dependencies/tween.esm.js";
import {loadAssets} from "./load.js";
<<<<<<< HEAD
import { Burger, Skater,Rapper,Muppie, Gamer } from "./animations.js";
import {mesh,mesh2,mesh3} from "./hitboxes.js";
=======
import { Animation } from "./animations.js";
>>>>>>> parent of 8b7db4e (model switching added)

(async () => {
    const scene = new THREE.Scene();
    //TESTS GO HERE START
    var score = 0;

<<<<<<< HEAD
    //LOAD
    scene.add(mesh,mesh2,mesh3);
    const {kitchenModel, burgerModel,rapperModel,skaterModel,muppieModel,gamerModel,chefModel} = await loadAssets();
    const burger = new Burger();
    const rapper = new Rapper();
    const skater = new Skater();
    const muppie = new Muppie();
    const gamer = new Gamer();

    console.log(burgerModel)
    burger.model = burgerModel;
    scene.add(burgerModel);
    

    //LIGHT
=======
    //IRON HITBOX
    const geometry = new THREE.BoxGeometry( .7, .5, .5 );
    const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
    const mesh = new THREE.Mesh( geometry, material );
    mesh.position.set(0,1,2.35);
    mesh.visible = false;
    scene.add(mesh)
    //IRON HITBOX
    
    //PASSED IRON HITBOX
    const geometry2 = new THREE.BoxGeometry(.7,.5,.5);
    const material2 = new THREE.MeshBasicMaterial({color:0xffff0});
    const mesh2 = new THREE.Mesh(geometry, material);
    mesh2.position.set(-1.2,1,-0.6);
    mesh2.visible=false;
    scene.add(mesh2);
    //PASSED IRON HITBOX
    
    //START HITBOX
    const geometry3 = new THREE.BoxGeometry(.7,.5,.5);
    const material3 = new THREE.MeshBasicMaterial({color:0xffff0});
    const mesh3 = new THREE.Mesh(geometry, material);
    mesh3.position.set(1.2,1,-0.6);
    mesh3.visible = false;
    scene.add(mesh3);
    //START HITBOX

    //TESTS GO HERE END
    
    const animate = new Animation();


    //Loading

    const {kitchen, burger} = await loadAssets();
    scene.add(kitchen,burger);
    animate.model = burger;
    animate.output();
    console.log(animate.model)
    animate.startAnimation()
    //Light
>>>>>>> parent of 8b7db4e (model switching added)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
    directionalLight.position.set(4,4,0)
    scene.add(directionalLight);
    //LIGHT

    //CAMERA
    const width = 4;
    const height = width * (812/375);
    const camera = new THREE.OrthographicCamera(width / -2,width / 2,height / 2,height / -2, 1, 100);
    camera.position.set(.2,2,4);
    camera.lookAt(0,0,0);
<<<<<<< HEAD
    //CAMERA
=======
>>>>>>> parent of 8b7db4e (model switching added)


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
<<<<<<< HEAD
    
    var currentModel = burger;
    const renderer = new THREE.WebGLRenderer({antialias: true,alpha: true});
    renderer.setSize(375, 812);
    //var controls = new OrbitControls( camera, renderer.domElement );
    var burgerHitbox = new THREE.Box3().setFromObject(currentModel);
=======
    const renderer = new THREE.WebGLRenderer({antialias: true,alpha: true});
    renderer.setSize(375, 812);
    var controls = new OrbitControls( camera, renderer.domElement );
    var burgerHitbox = new THREE.Box3().setFromObject(burger);
>>>>>>> parent of 8b7db4e (model switching added)
    var kitchenHitbox = new THREE.Box3().setFromObject(mesh);
    var passedIronHitbox = new THREE.Box3().setFromObject(mesh2);
    var startHitbox = new THREE.Box3().setFromObject(mesh3);
    //Tick
    var isExecuted = false;
    const clock = new THREE.Clock();
    const tick = function() {
        //controls.update()
        requestAnimationFrame(tick);
        render();
        document.getElementById("points").innerText = score;  
        burgerHitbox.setFromObject(burger);
        kitchenHitbox.setFromObject(mesh);
        if(burgerHitbox.intersectsBox(passedIronHitbox) && isExecuted==false && animate.smashStatus()==false){
            //score -=1;
            isExecuted=true;
        }else if(burgerHitbox.intersectsBox(startHitbox) && isExecuted == true){
            isExecuted=false;
<<<<<<< HEAD
            burgerHitbox.setFromObject(currentModel);
            //console.log(currentModel);
        }else if(burgerHitbox.intersectsBox(passedIronHitbox) && isExecuted==false){
            isExecuted=true;        
=======
>>>>>>> parent of 8b7db4e (model switching added)
        }
    }

    const render = () => {renderer.render(scene,camera)}
    tick();



    renderer.domElement.addEventListener("click", () =>{
<<<<<<< HEAD
        if(0){
=======
        if(kitchenHitbox.intersectsBox(burgerHitbox)){
>>>>>>> parent of 8b7db4e (model switching added)
            score+=1;
        }else{
            console.log("no hit");
            document.querySelector(".ui-board").style = "z-index:0;display:flex";
            document.getElementById("score").innerText = score;
        }
        
        
    })  
    document.getElementById("points").innerText = score;
    document.body.appendChild(renderer.domElement)

})()
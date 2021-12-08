import * as THREE from "./dependencies/three.module.js";
import {OrbitControls} from "./dependencies/OrbitControls.js";
import { Kitchen } from "./components/kitchen.js";
import { Burger } from "./components/burger.js";
import { Rapper } from "./components/rapper.js";
import { Gamer } from "./components/gamer.js";
import { Muppie } from "./components/muppie.js";
import { Skater } from "./components/skater.js";
import { Chef } from "./components/chef.js";
import { Game } from "./game.js";
import { helperStart, helperEnd, helperSmash, helperLeft, helperRight, helperBurger,helperRapper,helperMuppie,helperGamer, boxBurger,boxRapper,boxMuppie,boxGamer,boxRight,boxLeft,boxSmash } from "./hitboxes.js";
//Scene
const scene = new THREE.Scene();

//Load Manager
const manager = new THREE.LoadingManager();
manager.onStart = function ( url, itemsLoaded, itemsTotal ) {
	console.log( 'Started loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
};
manager.onLoad = function ( ) {
	console.log( 'Loading complete!');
    scene.add(kitchen,burger,rapper,gamer,muppie,skater,chef,helperStart,helperEnd,helperSmash,helperLeft,helperRight,helperBurger,helperRapper,helperMuppie);
    game.level1()
};
manager.onProgress = function ( url, itemsLoaded, itemsTotal ) {
    var percent = itemsLoaded/itemsTotal
    console.log(percent*100 + ' %')
};
manager.onError = function ( url ) {
	console.log( 'There was an error loading ' + url );
};

const kitchen = new Kitchen(manager);
const burger = new Burger(manager);
const rapper = new Rapper(manager);
const gamer = new Gamer(manager);
const muppie = new Muppie(manager);
const skater = new Skater(manager);
const chef = new Chef(manager);
const game = new Game(burger,rapper,gamer,muppie,skater);


//Ambient Light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

//Directional Light
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
directionalLight.position.set(4,4,0)
scene.add(directionalLight);

//Camera
const width = 5;
const height = width * (window.innerHeight/window.innerWidth);
const camera = new THREE.OrthographicCamera(width / -2,width / 2,height / 2,height / -2, 1, 100);
camera.position.set(.2,2,4);
camera.lookAt(0,0,0);

//Renderer
const renderer = new THREE.WebGLRenderer({antialias: true,alpha: true});
renderer.setSize(window.innerWidth, window.innerHeight);

//Clock
var clock = new THREE.Clock();
var delta = 0;

//OrbitControls
var controls = new OrbitControls( camera, renderer.domElement );

//Updater
const tick = function() {
    controls.update()
    delta = clock.getDelta();
    requestAnimationFrame(tick);
    render();
    document.getElementById("score").innerText = game.score;
    document.getElementById("lifes").innerText = game.lifes;
    boxBurger.setFromObject(burger);
    boxRapper.setFromObject(rapper);
    boxMuppie.setFromObject(muppie);
    boxGamer.setFromObject(gamer);

    if(boxBurger.intersectsBox(boxRight)){
        burger.isActive = true;
    }else if(boxBurger.intersectsBox(boxLeft)){
        burger.isActive = false
    }
    if(boxRapper.intersectsBox(boxRight)){
        rapper.isActive = true;
    }else if(boxRapper.intersectsBox(boxLeft)){
        rapper.isActive = false
    }
    if(boxMuppie.intersectsBox(boxRight)){
        muppie.isActive = true;
    }else if(boxMuppie.intersectsBox(boxLeft)){
        muppie.isActive = false
    }
    if(boxGamer.intersectsBox(boxRight)){
        gamer.isActive = true;
    }else if(boxGamer.intersectsBox(boxLeft)){
        gamer.isActive = false
    }
}

document.body.addEventListener('click', ()=>{
    if(burger.isActive && boxBurger.intersectsBox(boxSmash)){
        console.log('burger hit!!!');
        game.score+=50;
    }else if(burger.isActive && !boxBurger.intersectsBox(boxSmash)){
        console.log('burger no hit!!!');
        game.lifes -=1;
    }else if(burger.isActive === false){
        console.log('burger not active')
    }

    if(rapper.isActive && boxRapper.intersectsBox(boxSmash)){
        console.log('rapper hit!!!');
        game.score+=200;
    }else if(rapper.isActive && !boxRapper.intersectsBox(boxSmash)){
        console.log('rapper no hit!!!')
        game.lifes -=1;
    }else if(rapper.isActive === false){
        console.log('rapper not active')
    }

    if(muppie.isActive && boxMuppie.intersectsBox(boxSmash)){
        console.log('muppie hit!!!');
        game.score+=100;
    }else if(muppie.isActive && !boxMuppie.intersectsBox(boxSmash)){
        console.log('muppie no hit!!!')
        game.lifes -=1;
    }else if(muppie.isActive === false){
        console.log('muppie not active')
    }

    if(gamer.isActive && boxGamer.intersectsBox(boxSmash)){
        console.log('muppie hit!!!');
        game.score+=100;
    }else if(gamer.isActive && !boxGamer.intersectsBox(boxSmash)){
        console.log('gamer no hit!!!')
        game.lifes -=1;
    }else if(gamer.isActive === false){
        console.log('gamer not active')
    }
})

const render = () => {renderer.render(scene,camera)}
tick();
document.body.appendChild(renderer.domElement)

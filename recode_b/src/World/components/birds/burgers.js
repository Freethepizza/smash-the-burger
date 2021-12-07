import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.132.2/examples/jsm/loaders/GLTFLoader.js';

import { setupModel } from './setupModel.js';

async function loadBurgers() {
  const loader = new GLTFLoader();

  const [kitchenData, burgerData, skaterData, rapperData, muppieData, gamerData, chefData] = await Promise.all([
    loader.loadAsync('./assets/kitchen.glb'),
    loader.loadAsync('./assets/burger.glb'),
    loader.loadAsync('./assets/skater.glb'),
    loader.loadAsync('./assets/rapper.glb'),
    loader.loadAsync('./assets/muppie.glb'),
    loader.loadAsync('./assets/gamer.glb'),
    loader.loadAsync('./assets/chef.glb'),

  ]);



  const kitchen = setupModel(kitchenData);
  kitchen.position.set(0, 0, 0);

  const burger = setupModel(burgerData);
  burger.scale.set(.1, .1, .1);
  burger.position.set(.325,0,-.3);
  burger.name = 'burger';

  const skater = setupModel(skaterData);
  skater.scale.set(.1,.1,.1);
  skater.position.set(.38,0,-.3);
  skater.name = 'skater';

  const rapper = setupModel(rapperData);
  rapper.scale.set(.1,.1,.1);
  rapper.position.set(.38,0,-.3);
  rapper.name = 'rapper';

  const muppie = setupModel(muppieData);
  muppie.scale.set(.1,.1,.1);
  muppie.position.set(.38,0,-.3);
  muppie.name = 'muppie';

  const gamer = setupModel(gamerData);
  gamer.scale.set(.1,.1,.1);
  gamer.position.set(.38,0,-.3);
  gamer.name = 'gamer';

  const chef = setupModel(chefData);
  chef.scale.set(.35,.35,.35);
  chef.position.set(-.2,0,.4)

  return {
    kitchen,
    burger,
    skater,
    rapper,
    muppie,
    gamer,
    chef
  };
}

export { loadBurgers };

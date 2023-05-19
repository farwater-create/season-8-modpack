// priority: 1

/*
StartupEvents.registry('item', event => {
  // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
  // If you want a custom item model, you can create one in Blockbench and put it in kubejs/assets/kubejs/models/item/test_item.json
  event.create('sausage');
  event.create('hot_dog').food(food => {
		food
    		.hunger(4)
    		.saturation(8)
      		.effect('absorption', 20, 0, 1)
      		.alwaysEdible()
      		.meat()
	});
});


ServerEvents.recipes(event => {
  event.shapeless('kubejs:hot_dog', [
    'expandeddelight:chili_pepper',
    'kubejs:sausage',
    'minecraft:bread',
    'minecraft:sea_pickle',
    'farmersdelight:tomato'
  ]);
});

*/
// priority: 1

ServerEvents.recipes((e) => {
  e.recipes.create.filling({
    ingredients: [
      Fluid.of("kubejs:blazing_blood", 12150).toJson(),
      Item.of("create:blaze_cake_base").toJson(),
    ],
    results: [Item.of("create:blaze_cake", 1).toJson()],
  });

  e.recipes.create.filling({
    ingredients: [
      Fluid.of("kubejs:blazing_blood", 48600).toJson(),
      Item.of("minecraft:stick").toJson(),
    ],
    results: [Item.of("minecraft:blaze_rod", 1).toJson()],
  });
});

//BlockEvents.rightClicked(e => {
//if(e.block.id === 'create:blaze_burner' && e.item.id === "kubejs:blazing_blood_bucket") {
// e.block.setNbt("{fuelLevel: 2, burnTimeRemaining: 3148}");
// event.player.addItemCooldown('kubejs:blazing_blood_bucket', 1)
// }
//})

// priority: 1

function addFillingRecipe(
  e,
  ingredients,
  results
) {
  return e.recipes.create.filling({
    ingredients: ingredients.map((o) => o.toJson()),
    results: results.map((o) => o.toJson()),
  });
}

ServerEvents.recipes((e) => {
  addFillingRecipe(
    e,
    [Item.of("minecraft:string", 1), Fluid.of("farwater:liquid_rubber", 300*81)],
    [Item.of("farwater:rubber_string", 1)],
  );
    
  addFillingRecipe(
    e,
    [Item.of("minecraft:leather_boots", 1), Fluid.of("farwater:liquid_rubber", 1000*81)],
    [Item.of("farwater:rubber_boots", 1)],
  );
    
  addFillingRecipe(
    e,
    [Item.of("create:blaze_cake_base"), Fluid.of("farwater:blazing_blood", 150*81)],
    [Item.of("create:blaze_cake")],
  );
    
  addFillingRecipe(
    e,
    [Ingredient.of("#c:rods"), Fluid.of("farwater:blazing_blood", 500*81)],
    [Item.of("minecraft:blaze_rod")],
  );
});

//e.recipes.create.filling({
//        ingredients: [
//            Fluid.of("kubejs:blazing_blood", 12150).toJson(),
//            Item.of("create:blaze_cake_base").toJson()],
//       results: [Item.of("create:blaze_cake", 1).toJson()],
//    });
//    
//    e.recipes.create.filling({
 //       ingredients: [
 //           Fluid.of("kubejs:blazing_blood", 48600).toJson(),
 //           Item.of("minecraft:stick").toJson()],
  //      results: [Item.of("minecraft:blaze_rod", 1).toJson()],
 //   });

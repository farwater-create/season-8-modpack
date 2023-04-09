function addFillingRecipe(
    e,
    item,
    fluid,
    result
) {
    return e.recipes.create.filling({
        ingredients: [
            fluid.toJson(),
            item.toJson(),
        ],
        results: [result.toJson()],
    });

}

ServerEvents.recipes((e) => {
    addFillingRecipe(e,
        Item.of("minecraft:string", 1),
        Fluid.of("farwater:rubber", 100 * 81),
        Item.of("farwater:rubber_string", 1)
    );
    addFillingRecipe(e,
        Item.of("farmersdelight:rope", 1),
        Fluid.of("farwater:rubber", 100 * 81),
        Item.of("farwater:rubber_string", 1)
    );
    addFillingRecipe(e,
        Item.of("create:blaze_cake_base"),
        Fluid.of("farwater:blazing_blood", 12150),
        Item.of("create:blaze_cake", 1),
    );
    addFillingRecipe(e,
        Item.of("minecraft:stick"),
        Fluid.of("farwater:blazing_blood", 48600),
        Item.of("minecraft:blaze_rod", 1),
    );
})
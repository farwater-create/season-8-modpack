// priority: 1

function addSplashingRecipe(e, ingredients, results) {
 	return e.recipes.create.splashing({
        ingredients: ingredients.map(o => o.toJson()),
        results: results.map(o => o.toJson()),
    });
}

ServerEvents.recipes(e => {  
    addSplashingRecipe(e,
		[Item.of("minecraft:cobblestone", 1)],
        [Item.of("minecraft:mossy_cobblestone", 1)],
	);
})
// priority: 1

function addPressingRecipe(e, ingredients, results) {
 	return e.recipes.create.pressing({
        ingredients: ingredients.map(o => o.toJson()),
        results: results.map(o => o.toJson()),
    });
}


ServerEvents.recipes(e => {  
    addPressingRecipe(e,
		[Item.of("indrev:tungsten_ingot", 1)],
        [Item.of("indrev:tungsten_plate", 1)],
	);
    
    addPressingRecipe(e,
		[Item.of("indrev:tin_ingot", 1)],
        [Item.of("indrev:tin_plate", 1)],
	);
    
    addPressingRecipe(e,
		[Item.of("indrev:steel_ingot", 1)],
        [Item.of("indrev:steel_plate", 1)],
	);
    
    addPressingRecipe(e,
		[Item.of("indrev:silver_ingot", 1)],
        [Item.of("indrev:silver_plate", 1)],
	);
    
    addPressingRecipe(e,
		[Item.of("indrev:lead_ingot", 1)],
        [Item.of("indrev:lead_plate", 1)],
	);
    
    addPressingRecipe(e,
		[Item.of("indrev:bronze_ingot", 1)],
        [Item.of("indrev:bronze_plate", 1)],
	);
    
    addPressingRecipe(e,
		[Item.of("indrev:electrum_ingot", 1)],
        [Item.of("indrev:electrum_plate", 1)],
	);
})
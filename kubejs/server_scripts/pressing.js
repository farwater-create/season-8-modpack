// priority: 1

function addPressingRecipe(e, ingredients, results) {
 	return e.recipes.create.pressing({
        ingredients: ingredients.map(o => o.toJson()),
        results: results.map(o => o.toJson()),
    });
}


ServerEvents.recipes(e => {  
    
})
function addPressingRecipe(e, item, result) {
    return e.recipes.create.pressing({
      ingredients: [item].map((o) => o.toJson()),
      results: [result].map((o) => o.toJson()),
    });
  }

  ServerEvents.recipes(e => {
    addPressingRecipe(e,Item.of("farwater:rubber_string"),Item.of("create:belt_connector",2))
  })
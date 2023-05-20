REIEvents.groupEntries(event => {

  event.groupItems("kubejs:rei_groups/chipped", "Chipped Blocks", [
    Ingredient.of('@chipped').getItemIds(), 
  ])

  event.groupItems("kubejs:rei_groups/consistency_plus", "Consistency Blocks", [
    Ingredient.of('@consistency_plus').getItemIds(), 
 ])

})


// Listen to item tag event
ServerEvents.tags('item', event => {
  // Get the #forge:cobblestone tag collection and add Diamond Ore to it
  event.add('c:nuggets/iron', 'minecraft:iron_nugget');
})
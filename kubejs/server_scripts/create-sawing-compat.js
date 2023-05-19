// priority: 1

function addSawingRecipes(e, prefix, name) {
    // Stripping
    e.recipes.create.cutting(`${prefix}:stripped_${name}_log`, `${prefix}:${name}_log`);
    e.recipes.create.cutting(`${prefix}:stripped_${name}_wood`, `${prefix}:${name}_wood`);

    // Planks
    e.recipes.create.cutting(Item.of(`${prefix}:${name}_planks`, 6), `${prefix}:${name}_log`);
    e.recipes.create.cutting(Item.of(`${prefix}:${name}_planks`, 6), `${prefix}:stripped_${name}_log`);
    e.recipes.create.cutting(Item.of(`${prefix}:${name}_planks`, 6), `${prefix}:${name}_wood`);
    e.recipes.create.cutting(Item.of(`${prefix}:${name}_planks`, 6), `${prefix}:stripped_${name}_wood`);

    // Items from planks
    e.recipes.create.cutting(`${prefix}:${name}_stairs`, `${prefix}:${name}_planks`);
    e.recipes.create.cutting(`${prefix}:${name}_pressure_plate`, `${prefix}:${name}_planks`);
    e.recipes.create.cutting(`${prefix}:${name}_button`, `${prefix}:${name}_planks`);
    e.recipes.create.cutting(`${prefix}:${name}_trapdoor`, `${prefix}:${name}_planks`);
    e.recipes.create.cutting(`${prefix}:${name}_fence`, `${prefix}:${name}_planks`);
    e.recipes.create.cutting(`${prefix}:${name}_fence_gate`, `${prefix}:${name}_planks`);
}

ServerEvents.recipes(e => {
  e.recipes.create.cutting('paradise_lost:stripped_aurel_log', 'paradise_lost:mottled_aurel_log');
  addSawingRecipes(e, 'paradise_lost', 'aurel');
  addSawingRecipes(e, 'paradise_lost', 'mother_aurel');
  addSawingRecipes(e, 'paradise_lost', 'orange');
  addSawingRecipes(e, 'paradise_lost', 'wisteria');
});
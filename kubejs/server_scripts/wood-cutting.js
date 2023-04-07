// priority: 1
function addWoodCuttingRecipe(event, woodType) {
  event.stonecutting(
    "minecraft:" + woodType + "_planks",
    "minecraft:" + woodType + "_button"
  );
  event.stonecutting(
    "minecraft:" + woodType + "_planks",
    "minecraft:" + woodType + "_fence"
  );
  event.stonecutting(
    "minecraft:" + woodType + "_planks",
    "minecraft:" + woodType + "_fence_gate"
  );
  event.stonecutting(
    "minecraft:" + woodType + "_planks",
    "minecraft:" + woodType + "_pressure_plate"
  );
  event.stonecutting(
    "minecraft:" + woodType + "_planks",
    "minecraft:" + woodType + "_stairs"
  );
  event.stonecutting(
    "minecraft:" + woodType + "_planks",
    "minecraft:" + woodType + "_trapdoor"
  );
  event.stonecutting(
    "minecraft:" + woodType + "_button",
    "minecraft:" + woodType + "_planks"
  );
  event.stonecutting(
    "minecraft:" + woodType + "_fence",
    "minecraft:" + woodType + "_planks"
  );
  event.stonecutting(
    "minecraft:" + woodType + "_fence_gate",
    "minecraft:" + woodType + "_planks"
  );
  event.stonecutting(
    "minecraft:" + woodType + "_pressure_plate",
    "minecraft:" + woodType + "_planks"
  );
  event.stonecutting(
    "minecraft:" + woodType + "_stairs",
    "minecraft:" + woodType + "_planks"
  );
  event.stonecutting(
    "minecraft:" + woodType + "_trapdoor",
    "minecraft:" + woodType + "_planks"
  );
}

const woodTypes = [
  "acacia",
  "birch",
  "dark_oak",
  "jungle",
  "oak",
  "spruce",
  "crimson",
  "warped",
];

ServerEvents.recipes((e) => {
  console.info("loading woodcutting recipes");
  woodTypes.forEach((woodType) => addWoodCuttingRecipe(e, woodType));
});

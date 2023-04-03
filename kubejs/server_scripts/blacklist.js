// priority: 1

const outputBlacklist = [
  // AE2
  "ae2:spatial_anchor",
  "ae2:matter_cannon",
  "ae2:tiny_tnt",
  // Create
  "create:tree_fertilizer",
];

const recipeBlackList = [
  "minecraft:ender_eye",
  "ae2:network/parts/annihilation_plane_alt2",
  "ae2:network/parts/annihilation_plane_alt",
]

const modBlackList = [];

ServerEvents.recipes(e => {
  console.log("loading blacklist..")
  outputBlacklist.forEach((item) => e.remove({ output: item }));
  recipeBlackList.forEach((recipe) => e.remove({ id: recipe }));
  modBlackList.forEach((mod) => e.remove({ mod: mod }));
});

// priority: 1
const creepers = [
  "creeperoverhaul:jungle_creeper",
  "creeperoverhaul:bamboo_creeper",
  "creeperoverhaul:desert_creeper",
  "creeperoverhaul:badlands_creeper",
  "creeperoverhaul:hills_creeper",
  "creeperoverhaul:savannah_creeper",
  "creeperoverhaul:mushroom_creeper",
  "creeperoverhaul:swamp_creeper",
  "creeperoverhaul:dripstone_creeper",
  "creeperoverhaul:cave_creeper",
  "creeperoverhaul:dark_oak_creeper",
  "creeperoverhaul:spruce_creeper",
  "creeperoverhaul:beach_creeper",
  "creeperoverhaul:snowy_creeper",
];

ServerEvents.entityLootTables((e) => {
  console.info("loading creeper overhaul drops");
  creepers.forEach((creeper) => {
    e.addEntity(creeper, (table) => {
      table.addPool((pool) => {
        pool.rolls = [2, 5];
        pool.addItem("minecraft:gunpowder", 5);
        pool.survivesExplosion();
        switch (creeper) {
          case "creeperoverhaul:desert_creeper":
            pool.addItem("minecraft:sandstone", 1);
            pool.addItem("minecraft:sand", 1);
            break;
          case "creeperoverhaul:badlands_creeper":
            pool.addItem("minecraft:dirt", 1);
            break;
          case "creeperoverhaul:hills_creeper":
            pool.addItem("minecraft:stone", 1);
            pool.addItem("minecraft:iron_ingot", 1);
            pool.addItem("minecraft:redstone", 1);
            break;
          case "creeperoverhaul:cave_creeper":
            pool.addItem("minecraft:stone", 1);
            pool.addItem("minecraft:iron_ingot", 3);
            pool.addItem("minecraft:redstone", 3);
            break;
          case "creeperoverhaul:savannah_creeper":
            pool.addItem("minecraft:terracotta", 1);
            pool.addItem("minecraft:clay", 1);
            break;
          case "creeperoverhaul:dark_oak_creeper":
            pool.addItem("minecraft:dark_oak_log", 2);
            pool.addItem("minecraft:stick", 1);
            pool.addItem("minecraft:dark_oak_planks", 2);
            pool.addItem("minecraft:dark_oak_sapling", 2);
            break;
          case "creeperoverhaul:beach_creeper":
            pool.addItem("minecraft:sand", 1);
            pool.addItem("minecraft:clay", 1);
            break;
          case "creeperoverhaul:snowy_creeper":
            pool.addItem("minecraft:snowball", 2);
            pool.addItem("minecraft:ice", 2);
            break;
          case "creeperoverhaul:mushroom_creeper":
            pool.addItem("minecraft:mushroom_stew", 1);
            pool.addItem("minecraft:brown_mushroom", 2);
            pool.addItem("minecraft:red_mushroom", 2);
            break;
          case "creeperoverhaul:jungle_creeper":
            pool.addItem("minecraft:jungle_sapling", 2);
            pool.addItem("minecraft:jungle_log", 2);
            pool.addItem("minecraft:stick", 1);
            break;
          case "creeperoverhaul:bamboo_creeper":
            pool.addItem("minecraft:bamboo", 3);
            break;
        }
      });
    });
  });
});

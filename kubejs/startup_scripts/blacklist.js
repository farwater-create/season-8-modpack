// priority: 1

const REIBlacklist = [
  // AE2
  "ae2:spatial_anchor",
  "ae2:matter_cannon",
  "ae2:tiny_tnt",
  // Create
  "create:tree_fertilizer",
   // Supplementaries
  "supplementaries:crank",
  "supplementaries:bellows",
  "supplementaries:crystal_display",
  "supplementaries:faucet",
  "supplementaries:cage",
  "supplementaries:rope_arrow",
  "supplementaries:notice_board",
  "supplementaries:quiver",
  "supplementaries:bomb",
  "supplementaries:bomb_blue",
  "supplementaries:bomb_blue_projectile",
  "supplementaries:bomb_projectile",
  "supplementaries:bomb_spiky",
  "supplementaries:bomb_spiky_projectile",
  "supplementaries:iron_gate",
  "supplementaries:speaker_block",
  "supplementaries:relayer",
  "supplementaries:cog_block",
  "supplementaries:turn_table",
  "supplementaries:clock_block",
  "supplementaries:spring_launcher",
  "supplementaries:redstone_illuminator",
  "supplementaries:wrench",
  "supplementaries:pulley_block"
];

REIEvents.hide("item", (event) => {
  REIBlacklist.forEach((item) => {
    event.hide(item);
  });
});

// REIBlacklist.forEach((item) => REIEvents.hide(Item.of(item)));
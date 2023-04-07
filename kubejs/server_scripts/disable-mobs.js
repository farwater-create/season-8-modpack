let bannedMobs = ["minecraft:creeper"];

EntityEvents.spawned((event) => {
  const { entity } = event;

  if (typeof entity !== null) {
    let entityName = entity.getType();

    bannedMobs.forEach((bannedMob) => {
      if (entityName === bannedMob) {
        event.cancel();
      }
    });
  }
});

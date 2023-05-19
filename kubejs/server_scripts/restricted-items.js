// priority 100

const creativeBlocks = [
  "create:creative_motor",
  "create:creative_fluid_tank",
  "create:creative_crate",
  "createaddition:creative_energy",
  "powah:energy_cell_creative",
  "ae2:creative_energy_cell",
];

creativeBlocks.forEach((itemId) => {
  BlockEvents.placed(itemId, (event) => {
    const { player, block } = event;
      
    if (!player.isOp()) {
      event.cancel();
        
      const command = `/setblock ${block.x} ${block.y} ${block.z} air`;
      event.server.runCommand(command);
        
      console.log(
        `Player ${player.getName()} tried to place restricted item ${
          block.id
        } at ${block.x} ${block.y} ${block.z}`
      );
      player.tell("You must be OP to place this item.");
    }
  });
});

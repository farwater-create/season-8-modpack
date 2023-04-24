BlockEvents.placed('create:mechanical_drill', event => {
    const { player } = event;
    player.tell("Warning: Mechanical drills for generating cobblestone causes lag. Use Kibe's cobblestone generator instead.");
})

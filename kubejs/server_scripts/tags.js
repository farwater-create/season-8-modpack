let dicts={
    "farwater:fiber_plant":["minecraft:vine","minecraft:twisting_vines","minecraft:weeping_vines","minecraft:sugar_cane","betterend:bulb_vine","betterend:jungle_vine"],
}

ServerEvents.tags('item', event => {
    // Get the #forge:cobblestone tag collection and add Diamond Ore to it
    for(let key in dicts)
    {
        for(let i in dicts[key])
            event.add(key, dicts[key][i])
    }
    
});
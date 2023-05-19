ServerEvents.recipes(e => {
    e.shapeless(
    	Item.of('minecraft:ender_eye'), // arg 1: output
    [ 
        Item.of('minecraft:blaze_powder'),
        Item.of('minecraft:ender_pearl')
    ]
    )
})
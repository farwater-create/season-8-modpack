ServerEvents.recipes(e => {
    // BELT
   	e.shaped(
      Item.of('create:belt_connector', 3),
      [ 
        'rrr', 
      ],
      {
        r: 'farwater:rubber_string', 
      }
    )
    
    // BRASS TUNNEL
   	e.shaped(
      Item.of('create:brass_tunnel', 1),
      [ 
        'e  ', 
        'bb ',
        'rr '
      ],
      {
        e: 'create:electron_tube', 
        b: 'create:brass_ingot', 
        r: 'farwater:rubber_string'
      }
    )
    
    // BRASS FUNNEL
   	e.shaped(
      Item.of('create:brass_funnel', 1),
      [ 
        'e', 
        'b',
        'r'
      ],
      {
        e: 'create:electron_tube', 
        b: 'create:brass_ingot', 
        r: 'farwater:rubber_string'
      }
    )
    
    // Fluid Pipe Mk1
   	e.shaped(
      Item.of('indrev:fluid_pipe_mk1', 1),
      [ 
        'rcr' 
      ],
      {
        c: 'minecraft:copper_ingot',
        r: 'farwater:rubber_string'
      }
    )
    
    // OUTPUT SERVO
   	e.shaped(
      Item.of('indrev:servo_output', 1),
      [ 
        'ici' 
      ],
      {
        c: 'create:copper_nugget',
        i: 'minecraft:iron_nugget'
      }
    )
    
    // RETRIEVER SERVO
   	e.shaped(
      Item.of('indrev:servo_retriever', 1),
      [ 
        'ili' 
      ],
      {
        i: 'minecraft:iron_nugget',
        l: 'minecraft:lapis_lazuli'
      }
    )
})

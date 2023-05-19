ServerEvents.recipes(e => {
    // piston_extension_pole
   	e.shaped(
      Item.of('create:piston_extension_pole', 8),
      [ 
        'l', 
        'a', 
        'l', 
      ],
      {
        l: '#minecraft:logs', 
        a: 'create:andesite_alloy', 
      }
    )
    
    // BELT
   	e.shaped(
      Item.of('create:belt_connector', 1),
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
    
    // BABY BACKPACK
   	e.shaped(
      Item.of('inmis:baby_backpack', 1),
      [ 
        'lll', 
        'lcl',
        'lll'
      ],
      {
        l: 'minecraft:leather', 
        c: 'minecraft:chest', 
      }
    )
    
    // FRAYED BACKPACK
   	e.shaped(
      Item.of('inmis:frayed_backpack', 1),
      [ 
        'lll', 
        'lbl',
        'lll'
      ],
      {
        l: 'minecraft:leather', 
        b: 'inmis:baby_backpack', 
      }
    )
    
    // PLATED BACKPACK
   	e.shaped(
      Item.of('inmis:plated_backpack', 1),
      [ 
        'iri', 
        'ibi',
        'iii'
      ],
      {
        r: 'farwater:rubber_string', 
        i: 'createdeco:cast_iron_sheet', 
        b: 'inmis:frayed_backpack', 
      }
    )
    
    // ANGEL RING
    // Disabled by request from Oog -- dithpri 2023-05-17
   	/* e.shaped(
      Item.of('kibe:angel_ring', 1),
      [ 
        'nhn', 
        'ere',
        'ncn'
      ],
      {
        n: 'minecraft:nether_star', 
        e: 'minecraft:elytra', 
        r: 'kibe:diamond_ring', 
        h: 'minecraft:dragon_head', 
        c: 'minecraft:end_crystal', 
      }
    )
   */
})
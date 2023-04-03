// Startup script
StartupEvents.registry('fluid', e => {
  // Basic blazing blood 
  e.create('blazing_blood')
    .thickTexture(0xFFAC1C)
    .bucketColor(0xFFAC1C)
    .displayName('Blazing Blood')
  	.luminosity(8)
    .density(3000) // same as lava
    .viscosity(6000) // same as lava
    .temperature(1300) // same as lava
    .flowingTexture("minecraft:lava_flow") // same as lava
})
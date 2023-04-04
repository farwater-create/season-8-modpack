// Startup script
StartupEvents.registry('fluid', e => {
  // Basic blazing blood 
  e.create('blazing_blood')
    .stillTexture('kubejs:block/blazing_blood')
    .flowingTexture('kubejs:block/blazing_blood_flowing')
    .bucketColor(0xFF781F)
    .displayName('Blazing Blood')
    .viscosity(6000) // same as lava
    .temperature(1300) // same as lava
})
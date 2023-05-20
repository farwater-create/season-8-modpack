ServerEvents.recipes(event => {
  event.remove({output: 'vinery:wine_rack_1'})

  event.shaped("vinery:wine_rack_1", ["PSP", "STS", "PSP"], {
      P: "#planks",
      S: "#wooden_slabs",
      T: "#wooden_trapdoors",
  })
})
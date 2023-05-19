MoreJSEvents.villagerTrades((event) => {
    console.log("loading villagerTrades...");
    event.removeVanillaTrades();
    event.removeModdedTrades();
});

MoreJSEvents.playerStartTrading((event) => {
    event.forEachOffers((o, i) => {
        o.disabled = true;
    });
});
ServerEvents.recipes(event => {
    event.remove({
        output: [
            'vintagedelight:smooth_salt_block'
        ]
    })
})

ServerEvents.recipes(event => {
    event.recipes.farmersdelight.cutting('#on:salt_block', '#minecraft:pickaxes', ['2x spelunkery:salt'])
    event.recipes.farmersdelight.cutting('galosphere:pink_salt_straw', '#minecraft:pickaxes', ['galosphere:pink_salt_shard'])
    event.recipes.farmersdelight.cutting('galosphere:pink_salt_shard', '#minecraft:pickaxes', ['2x spelunkery:salt'])
    event.shapeless('vintagedelight:smooth_salt_block', ['supplementaries:ash_brick', 'spelunkery:salt', 'supplementaries:ash_brick', 'spelunkery:salt'])
})
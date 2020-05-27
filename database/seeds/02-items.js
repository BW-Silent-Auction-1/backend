exports.seed = async function(knex) {
	await knex("items").truncate()
	await knex("items").insert([
    {id: 1, auctioneer_id: 1, name: 'Lamp', description: 'this is an item description', price: 777},
    {id: 2, auctioneer_id: 2, name: 'Desk', description: 'this is an item description', price: 4444},
    {id: 3, auctioneer_id: 1, name: 'Sword', description: 'this is an item description', price: 10000},
    {id: 4, auctioneer_id: 3, name: 'Shield', description: 'this is an item description', price: 555}
	])
}

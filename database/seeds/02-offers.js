exports.seed = async function(knex) {
	await knex("offers").truncate()
	await knex("offers").insert([
    {item_id: 1, bidder_id: 2, ammount: 888},
    {item_id: 2, bidder_id: 2, ammount: 50000},
    {item_id: 3, bidder_id: 3, ammount: 150000},
    {item_id: 4, bidder_id: 1, ammount: 999},
    {item_id: 1, bidder_id: 1, ammount: 999},
    {item_id: 4, bidder_id: 2, ammount: 10000},
    {item_id: 4, bidder_id: 3, ammount: 11111},
    {item_id: 2, bidder_id: 1, ammount: 11299}
	])
}

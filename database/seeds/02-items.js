exports.seed = async function(knex) {
	await knex("items").truncate()
	await knex("items").insert([
    {id: 1, auctioneer_id: 1, name: 'Lamp', description: 'this is an item description', price: 777, image_url: "https://images-na.ssl-images-amazon.com/images/I/61h3lHHQxnL._AC_SL1162_.jpg", end_date: "07-15-2020"},
    {id: 2, auctioneer_id: 2, name: 'Desk', description: 'this is an item description', price: 4444, image_url:"https://i.pinimg.com/236x/75/63/8f/75638f40e53d69af25eeefebd91cd8d3--furniture-office-home-office-desks.jpg", end_date: "07-15-2020"},
    {id: 3, auctioneer_id: 1, name: 'Sword', description: 'this is an item description', price: 10000, image_url: "https://i.pinimg.com/236x/c0/92/ac/c092ac869d51ee59838df88070557c97.jpg", end_date: "07-15-2020"},
    {id: 4, auctioneer_id: 3, name: 'Shield', description: 'this is an item description', price: 555, image_url: "https://images-na.ssl-images-amazon.com/images/I/81S-q%2BeWoiL._AC_UX679_.jpg", end_date: "07-15-2020"}
	])
}

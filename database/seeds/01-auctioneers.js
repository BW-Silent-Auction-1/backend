const bcrypt = require("bcryptjs")

exports.seed = async function(knex) {
	await knex("auctioneers").truncate()
	await knex("auctioneers").insert([
    {id: 1, name: 'jose', password: await bcrypt.hash("12345", 14)},
    {id: 2, name: 'cobrettie', password: await bcrypt.hash("67890", 14)},
    {id: 3, name: 'kaleb', password: await bcrypt.hash("09876", 14)}
	])
}

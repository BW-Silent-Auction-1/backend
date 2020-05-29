const bcrypt = require("bcryptjs")

exports.seed = async function(knex) {
	await knex("bidders").truncate()
	await knex("bidders").insert([
    {id: 1, name: 'ricardo', password: await bcrypt.hash("12345", 14)},
    {id: 2, name: 'lenny', password: await bcrypt.hash("qwerty", 14)},
    {id: 3, name: 'austen', password: await bcrypt.hash("ytrewq", 14)}
	])
}

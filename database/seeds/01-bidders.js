exports.seed = async function(knex) {
	await knex("bidders").truncate()
	await knex("bidders").insert([
    {id: 1, name: 'ricardo', password: '54321'},
    {id: 2, name: 'lenny', password: 'qwerty'},
    {id: 3, name: 'austen', password: 'ytrewq'}
	])
}

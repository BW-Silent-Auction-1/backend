exports.seed = async function(knex) {
	await knex("auctioneers").truncate()
	await knex("auctioneers").insert([
    {id: 1, name: 'jose', password: '12345'},
    {id: 2, name: 'cobrettie', password: '67890'},
    {id: 3, name: 'kaleb', password: '09876'}
	])
}

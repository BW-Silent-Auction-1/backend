
const bcrypt = require("bcryptjs")

const db = require("../database/config")


async function add(user) {
	user.password = await bcrypt.hash(user.password, 14)

	if(user.role === 'auctioneer'){
		const [id] = await db("auctioneers").insert({name: user.name, password: user.password})
		return findById(id, user.role)
	}
	else if (user.role ==='bidder'){
		const [id] = await db("bidders").insert({name: user.name, password: user.password})
        return findById(id, user.role) 
	}
}


function find() {
	const bidders =  db("bidders").select("id", "name")
	const auctioneers =  db("auctioneers").select("id", "name")

	if (!bidders){
		return auctioneers
	}
	else {
		return bidders
	}
}

async function findBy(filter) {
        
    const bidder = await db("bidders as b")
        .where(filter)
        .select("b.id", "b.name", "b.password")
        .first()
      
    const auctioneer = await db("auctioneers as a")
        .where(filter)
        .select("a.id", "a.name", "a.password")
        .first()



	if (bidder){
        return bidder
        
	}
	else if (auctioneer) {
        return auctioneer
	}
}

async function findById(id, role) {

	const bidder = await db("bidders")
		.select("id", "name")
		.where({ id })
		.first()

	const auctioneer = await db("auctioneers")
	.select("id", "name")
	.where({ id })
	.first()

	if (!bidder){
		return  {...auctioneer, role: role}
	}
	else {
		return  {...bidder, role: role}
	}
}

module.exports = {
	add,
	find,
	findBy,
	findById,
}


const db = require('../database/config')


async function getAll(){
    return await db.table('bidders')
}

async function getById(id){
    return await db.table('bidders as b')
    .where('b.id', id)

}

async function add(data){
    console.log("data", data)
    return  db('bidders')
    .insert({
        name: data.name,
        password: data.password,
    })
}


async function getBiddersBids(id){
   return db('bidders as b')
   .where('b.id', id)
   .join('offers as o', 'o.bidder_id', 'b.id')
   .join('items as i', 'i.id', 'o.item_id' )
   .select('i.id as Item Id', 'b.id as Bidder Id', 'i.name as Item Name', 'i.description as Item Description', 'o.ammount as Ammount Bid')
}



module.exports = {
    getAll,
    getById,
    add,
    getBiddersBids
};
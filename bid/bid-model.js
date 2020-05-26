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
   return db('offers as o')
   .join('bidders as b', 'b.id', 'o.bidders_id')
   .select('o.item_id as Item Id', 'b.name as Bidders', 'i.item_name as Item Name', 'i.item_description as Item Description', 'o.ammount as Ammount Bid')
   .where('a.id', id)
}



module.exports = {
    getAll,
    getById,
    add,
    getBiddersBids
};
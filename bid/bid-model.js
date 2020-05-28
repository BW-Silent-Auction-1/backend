const db = require('../database/config')


async function getAll(){
    return await db.table('bidders')
}

async function getById(id){
    return await db.table('bidders as b')
    .where('b.id', id)

}

async function getBiddersBids(id){
   return db('bidders as b')
   .where('b.id', id)
   .join('offers as o', 'o.bidder_id', 'b.id')
   .join('items as i', 'i.id', 'o.item_id' )
   .select('i.id as itemId', 'b.id as bidderId', 'i.name as itemName', 'i.description as itemDescription', 'o.ammount as ammountBid')
}



module.exports = {
    getAll,
    getById,
    getBiddersBids
};
const db = require('../database/config')


async function getAll(){
    return await db.table('auctioneers')
}

async function getById(id){
    return await db.table('auctioneers as a')
    .where('a.id', id)

}


async function addItem(id, item){
    return db('items').
    insert({
        auctioneer_id: id,
        name: item.name,
        description: item.description,
        price: item.price
    })
}

async function getAuctioneerItems(id){
   return db('items as i').
   join('auctioneers as a', 'a.id', 'i.auctioneer_id')
   .select('i.id as itemId', 'a.id as auctioneerId', 'a.name as auctioneerName', 'i.name as itemName', 'i.description as itemDescription', 'i.price as initialPrice')
   .where('a.id', id)
}



module.exports = {
    getAll,
    getById,
    addItem,
    getAuctioneerItems
};
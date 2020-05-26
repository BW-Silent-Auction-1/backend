const db = require('../database/config')


async function getAll(){
    return await db.table('auctioneers')
}

async function getById(id){
    return await db.table('auctioneers as a')
    .where('a.id', id)

}

async function add(data){
    console.log("data", data)
    return  db('auctioneers')
    .insert({
        name: data.name,
        password: data.password,
    })
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
   .select('i.id as Item Id', 'a.name as Auctioneer', 'i.name as Item Name', 'i.description as Item Description', 'i.price as Initial Price')
   .where('a.id', id)
}



module.exports = {
    getAll,
    getById,
    add,
    addItem,
    getAuctioneerItems
};
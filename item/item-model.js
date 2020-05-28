const db = require('../database/config')


async function getAll(){
    return await db.table('items')
}



async function getById(id){
    
   
    
    const offer = await db.table('offers as o')
    .where('o.item_id', id)
    .orderBy('o.ammount', 'desc').limit(1)
  
 


        
    //1. thought it was working but its not. check why
    //2. ask Michael if there is a better way to get the offer inside the same return that is below, instead of separating it here
     if(!offer[0]){
        return await db.table('items as i')
        .where('i.id', id)
        .select('i.id as itemId', 'i.name as itemName', 'i.auctioneer_id as auctioneerId', 'i.description as itemDescription', 'i.price as initialPrice')
       }
    else{
        return await db.table('items as i')
        .where('i.id', id)
        .join('offers as o', 'o.item_id', 'i.id')
        .select('i.id as itemId', 'i.name as itemName', 'i.auctioneer_id as auctioneerId', 'i.description as itemDescription', 'i.price as initialPrice', 'o.ammount as bestOffer')
        .orderBy('o.ammount', 'desc').limit(1)
        }
    

        
}


async function addOffer(id, offer){

    const itemId = id[0]
    const bidderId = id[1]

    return db('offers').
    insert({
        item_id: id.id,
        bidder_id: id.bidderId,
        ammount: offer.ammount
    })
}





module.exports = {
    getAll,
    getById,
    addOffer,
    
};
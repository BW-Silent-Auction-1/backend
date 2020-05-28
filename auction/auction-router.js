const express = require('express')
const router = express.Router()

const db = require('./auction-model')

//get all the auctioneers
router.get("/", async (req, res, next) =>{
    try{
        res.json(await db.getAll())
    }
    catch(err){
        next(err)
    }
})

//get a specific auctioneer
router.get('/:id', async (req, res, next)=>{
    try{
        console.log(req.params.id)
        res.json(await db.getById(req.params.id))
    } catch(err){
        next(err)
    }
})


//creates a new item for an auctioneer
router.post("/:id/items", async (req, res, next) =>{
    const id = req.params.id
    try{
        res.json(await db.addItem(id, req.body))
    }
    catch(err){
        next(err)
    }
})

//get all the items posted by an auctioneer
router.get("/:id/items", async (req, res, next) =>{
    try{
        res.json(await db.getAuctioneerItems(req.params.id))
    }
    catch(err){
        next(err)
    }
})




module.exports = router;
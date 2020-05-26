const express = require('express')
const router = express.Router()

const db = require('./item-model')

//gets a list of all the items
router.get("/", async (req, res, next) =>{
    try{
        res.json(await db.getAll())
    }
    catch(err){
        next(err)
    }
})

//gets a specific item
router.get('/:id', async (req, res, next)=>{
    try{
        res.json(await db.getById(req.params.id))
    } catch(err){
        next(err)
    }
})

//post an offer to an item by a bidder
router.post("/:id/bidder/:bidderId/", async (req, res, next) =>{
    const id = req.params
    try{
        res.json(await db.addOffer(id, req.body))
    }
    catch(err){
        next(err)
    }
})




module.exports = router;
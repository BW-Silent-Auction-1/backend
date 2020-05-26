const express = require('express')
const router = express.Router()

const db = require('./bid-model')

//gets all the bidders
router.get("/", async (req, res, next) =>{
    try{
        res.json(await db.getAll())
    }
    catch(err){
        next(err)
    }
})

//gets an specific bidder
router.get('/:id', async (req, res, next)=>{
    try{
        res.json(await db.getById(req.params.id))
    } catch(err){
        next(err)
    }
})

//creates new bidder user
router.post("/", async (req, res, next) =>{
    try{
        res.json(await db.add(req.body))
    }
    catch(err){
        next(err)
    }
})

//gets all the bids from an specific bidder
router.get("/:id/bids", async (req, res, next) =>{
    try{
        res.json(await db.getBiddersBids(req.params.id))
    }
    catch(err){
        next(err)
    }
})

router.post("/")





module.exports = router;
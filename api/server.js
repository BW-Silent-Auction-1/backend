const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const cookieParser = require('cookie-parser')

const restrict = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js');
const auctionRouter = require('../auction/auction-router.js');
const bidRouter = require('../bid/bid-router.js')
const itemRouter = require('../item/item-router.js')

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(cookieParser())

server.use('/auctioneer', auctionRouter);
server.use('/bidder', bidRouter );
server.use('/item', itemRouter)


server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
        message: "Something went wrong",
	})
})


server.get('/', (req, res)=>{
    res.json({
        message: 'Silent Auction API!'
    })
})


module.exports = server;



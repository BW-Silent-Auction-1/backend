const router = require('express').Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Users = require('./auth-model')


router.post('/register', async (req, res, next) => {
    try{
        const {name} = req.body
        const username = await Users.findBy({name})
  
        if (username){
          return res.status(409).json({
              message: "User is already taken"
          })
        }
        res.status(201).json(await Users.add(req.body))

    }
    catch(err){
      next(err)
    }
});

router.post('/login', async (req, res, next) => {
   const authError = {
      message: "Invalid Credentials"
   }
   const {name} = req.body  
   try{
      const userData = await Users.findBy({name})

        if (!userData){
          return res.status(401).json(authError)
      }
      console.log(req.body.password, userData.password)
      const passwordValid = await bcrypt.compare(req.body.password, userData.password)
      console.log(passwordValid)
        if (!passwordValid){
            return res.status(401).json(authError)
        }

      const tokenPayload = {
          userId: userData.id,
          userName: userData.name,
          userRole: userData.role
      }
      
      const token = jwt.sign(tokenPayload, process.env.JWT_SECRET) 
      res.json({
          message: `Welcome ${userData.name}!`,
          token: token
      })
   }
   catch(err){
     next(err)
   }
});


module.exports = router;

const express = require('express')
const { off } = require('../models/usermodels')
const router = express.Router()
const user = require('../models/usermodels')

router.get('/',async(req,res)=>{
   try{
    const qwerty = await user.find()
    res.json(qwerty)
      
   }catch(err){
    res.send('Error'+ err)

   }
  
})

    router.post('/s',async(req,res)=>{
        const send = new user({
            role: req.body.role,
            username: req.body.username,
            password: req.body.password
        })
        try{
             const a1 = await send.save()
             res.json(a1)
        }catch(err){
              res.send("Error")
        }
    })

    router.post('/cre',async(req,res)=>{
        console.log(req.body)
        
        const {role,username,password} = req.body

        if(!username||typeof username!=="string"){
            return res.json({status:"error", error:"Invalid username"})
        }
        if(!password||typeof password!=="string" ){
            return res.json({status:"error", error:"Invalid password"})
        }
        if(password.length<5){
            return res.json({
                status:'error',
                error:'password too small,should be atleast 6 character'
            })
        }
       try{
        const response = await user.create({
            role,
            username,
            password
        })
         console.log('User Created Successfully:',response)
       }catch(error){
          if(error.code === 11000){
            return res.json({status:'error',error:'username already in use'})
          }
          throw error
       }
       res.json({status:'ok'})

    })

router.post('/cpass',async(req,res)=>{
    console.log(req.body)

    const {username,password,newpassword} = req.body

    const filter = ({username: req.body.username})
    console.log("qqe",filter)
    try{
        
 

        const doc = await user.findOne({ filter: username});
        console.log("sddff",doc)

      await user.updateOne({filter: username}, { password: newpassword });
        
        await doc.save();

    }catch(err){
        return res.json({status:'error',error:'username already in use'})
    }
       
    res.json({status:'updated success'})
})



router.post('/login',async(req,res)=>{

const {username,password} = req.body;

const us = await user.findOne({username,password}).lean()
if(!us){
    return res.json({status:'error', error:'Invalid Username/password'})
}

res.json({us})

})






module.exports = router



                                                                                
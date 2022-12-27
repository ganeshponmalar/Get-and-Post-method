const express = require('express')
const router = express.Router()

const student = require('../models/studentSchema')

router.post('/po',async(req,res)=>{

    const getId = req.body.Id
    
    student.find(({Id:getId}),async(err,val)=>{
        if(err){
            res.send("Error")
        }
        else{
            if(val.length>0){
                res.json(true);
            }else{
                res.json(false);
                const qwerty = new student({
                    name: req.body.name,
                    studentId: req.body.studentId,
                    DateOfBirth: req.body.DateOfBirth,
                    emailId: req.body.emailId,
                    mobileNumber: req.body.mobileNumber,
                    pincode: req.body.pincode,
                    gender: req.body.gender,
                    address: req.body.address,
                    branch: req.body.branch,
                    section: req.body.section  
                })
                try{
                    const a = await qwerty.save()

                }catch(err){
                    res.send('error')
                }
            }
        }
    })


})

router.patch('/edit',async(req,res)=>{
    try{
       const qwer = student.findById(req.body.Id)
       qwer.name = req.body.name,
       qwer.Id = req.body.Id,
       qwer.DateOfBirth = req.body.DateOfBirth,
       qwer.emailId = req.body.emailId,
       qwer. mobileNumber = req.body. mobileNumber,
       qwer.gender = req.body.gender,
       qwer.address = req.body.address,
       qwer.pincode = req.body.pincode,
       qwer.branch = req.body.branch,
       qwer.section = req.body.section

       const a2 = await qwer.save()
       res.json(a2)


    }catch(err){
     res.send('Error')
         
    }
    // student.collection('user').update({'_id':ObjectID(req.session.loggedIn)}, 
    // {$set: {image : filename}}, {w:1}, function(err, result){
    //     console.log(result);

})




module.exports = router


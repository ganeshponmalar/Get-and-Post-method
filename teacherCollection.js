const express = require('express')
const router = express.Router()

const teacher = require('../models/teacherSchema')

router.post('/te',async(req,res)=>{
const getId = req.body.teacherId

teacher.find(({teacherId:getId}),async(err,val)=>{
    if(err){
        res.send('Error')
    }else{
        if(val.length>0){
            res.json(true)
        }else{
            res.json(false)
            const techId = new teacher({
                name: req.body.name,
                teacherId: req.body.teacherId,
                DateOfBirth: req.body.DateOfBirth,
                emailId: req.body.emailId,
                mobileNumber: req.body.mobileNumber,
                gender: req.body.gender,
                address: req.body.address,
                pincode: req.body.pincode,
                Department: req.body.Department,
                Qualification: req.body.Qualification
            })
            try{
                const b = await techId.save()

                 
            }catch(err){
              res.send('error') 

            }
        }

    }
})
})

module.exports = router
const mongoose = require('mongoose')



const stuSchema = new mongoose.Schema({

    name:{
        type: String,
        require: true
    },
    studentId:{
        type: Number,
        require: true
    },

    DateOfBirth:{
        type: Date,
        require: true
    },

    emailId:{
        type: String,
        require: true
    },

    mobileNumber:{
        type: Number,
        require: true
    },
    gender:{
        type: String,
        require: true
    },

       address:{
        type: String,
        require: true
    },

    pincode:{
        type: Number,
        require: true
    },
    branch:{
        type: String,
        require: true
    },
    section:{
        type: String,
        require: true
    }
    

})
module.exports = mongoose.model('studentModel',stuSchema,'student')
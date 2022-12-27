const mongoose = require('mongoose')


const teacSchema = new mongoose.Schema({
name:{
    type: String,
    require: true
},

teacherId:{
    type: String,
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
    type: String,
    require: true
},
Department:{
    type: String,
    require: true
},
Qualification:{
    type: String,
    require: true
}



})

module.exports = mongoose.model('teacherModel',teacSchema,'teacher')
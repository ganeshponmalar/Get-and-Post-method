const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    role:{
        type: String,
        require: true
    },

    username: {
        type: String,
        require: true,
        unique: true
    },

    password: {
        type: Number,
        require: true
    }

})

module.exports = mongoose.model('student',userSchema,'user')
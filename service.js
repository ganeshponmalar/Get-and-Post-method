const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const bodyParser = require('body-parser')
const cors = require('cors');

const url = 'mongodb://127.0.0.1:27017/school'

const app = express()

app.use(bodyParser.json())


app.use(cors({
    origin: '*'
}));

mongoose.connect(url,{useNewUrlParser: true})
const con = mongoose.connection

con.on('open',()=>{
    console.log('connected...')
})
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

const myRouter = require('./routes/students')
app.use('/section',myRouter)


const studentRou = require('./routes/studentCollection')
app.use('/marker',studentRou)

const teacherRou = require('./routes/teacherCollection')
app.use('/tec',teacherRou)

app.listen(9000,()=>{
console.log('server started')
})


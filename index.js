console.log('Server is running at 4040')

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const ejs = require('ejs')

let app = express()

let port = 4040;

let newsRoute = require('./route/newsRoute')

app.use(
    bodyParser.urlencoded({
        extended:true
    })
)

mongoose.connect("mongodb://localhost:27017/NewsPortal")

const db = mongoose.connection;

db.once("open",()=>{
    console.log('MongoDB is connected successfully')
})

app.use('/',newsRoute)

app.set('views', __dirname + '/views')
app.engine('ejs',ejs.renderFile)
app.set('view engine', 'ejs')

app.listen(port,()=>{
    console.log(`Listening to port ${port}`)
})

module.exports = app;
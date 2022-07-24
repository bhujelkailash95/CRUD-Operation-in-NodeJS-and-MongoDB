const {type} = require('express/lib/response')
let mongoose = require('mongoose')

const NewsSchema = mongoose.Schema({
    title:{type:String,
    required:true},
    description:String,
    author:String,
    type:String
})

module.exports = mongoose.model("News",NewsSchema)
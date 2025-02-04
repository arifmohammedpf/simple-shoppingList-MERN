const mongoose = require('mongoose')
const Schema = mongoose.Schema

const itemSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    date:{
        type:String,
        default:Date.now
    }
})

module.exports = mongoose.model('Item',itemSchema)
var mongoose = require('./db')

// 新闻的Schema
var newSchema = mongoose.Schema({
    title:String,
    type:Number,
    content:String,
    auth:String,
    reder:Number
})


var newModel = mongoose.model('News',newSchema,'news')


module.exports = newModel
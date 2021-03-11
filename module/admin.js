var mongoose = require('./db')

var adminSchema = mongoose.Schema({
    name:String,
    mobile:String,
    password:String
})


var adminModel = mongoose.model('User',adminSchema,'user')


module.exports = adminModel
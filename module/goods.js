var mongoose = require('./db')

var goodsSchema = mongoose.Schema({
    name:String,
    price:String,
    describe:String,
    shop:String,
    tip:String
})

var goodsModel = mongoose.model('Goods',goodsSchema,'goods')


module.exports = goodsModel
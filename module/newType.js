var mongoose = require('./db')

// 新闻type的Schema
var newTypeSchema = mongoose.Schema({
    type_desc:String
})

// newType - 数据库名称 ，

var newTypeModel = mongoose.model('newType',newTypeSchema,'newType')

module.exports = newTypeModel
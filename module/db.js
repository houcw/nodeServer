// 引入mongose
const mongose = require('mongoose')

// 建立连接
const url = "mongodb://localhost:27017/nuxt"
 mongose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true},function(err){
    if(err){
        console.log(err);
        return
    }
    console.log("数据库链接成功");
 })
 module.exports = mongose
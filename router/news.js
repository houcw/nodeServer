
const { response, request } = require('express');
const express = require('express')
const newsExpress = express.Router();

// 引入news连接数据库模块
const newsMoedl = require('../module/news')

newsExpress.get('/newsList',(response,request)=>{
    // 连接News模块数据库
    newsMoedl.find({},function(err, res){
        // 连接出错
        if(err){
            // 打印错误日志
            console.log(err);
            return 
        }
         // 将数据返回给前端
         let data = {
            status:'success',
            code:200,
            data:res
        }
        respone.send(data)

    })
})




module.exports = newsExpress
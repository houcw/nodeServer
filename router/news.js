
const { response, request } = require('express');
const express = require('express')
const newsExpress = express.Router();

// 引入news连接数据库模块
const newsMoedl = require('../module/news')

// 返回数据的模板格式
const Templete = require('./templete')

// 获取新闻列表
newsExpress.get('/newsList',(request,response)=>{
    // 连接News模块数据库
    newsMoedl.find({},function(err, res){
        // 连接出错
        if(err){
            // 打印错误日志
            console.log(err);
            return 
        }
         // 将数据返回给前端
        Templete.data = res
        response.send(Templete)

    })
})

// 根据新闻id获取新闻详情
newsExpress.get('/newsDetail',(request,response)=>{
    // 获取前端路由参数 (id)
    let id = request.query.id
    // 连接数据库，根据id查找
    newsMoedl.find({id:id},function(err,res){
        // 连接错误
        if(err){
            console.log(err);
            return
        }

        // 成功
        let data = {
            status:'success',
            code:200,
            data:res
        }
    })


})




module.exports = newsExpress
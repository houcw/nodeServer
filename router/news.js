
const { response, request } = require('express');
const express = require('express')
const newsExpress = express.Router();

// 引入news连接数据库模块
const newsMoedl = require('../module/news')
// 引入newsType连接数据库模块
const newType = require('../module/newType')

// 返回数据的模板格式
const Templete = require('./templete')

// 获取新闻分頁列表
newsExpress.get('/newsList', (request, response) => {
    // 获取前端传递的分页参数
    let pageCurrent = parseInt(request.query.pageCurrent)
    let pageSize = parseInt(request.query.pageSize) 
    

    // 连接News模块数据库
    newsMoedl.find({}).skip(pageSize*(pageCurrent-1)).limit(pageSize).exec(function (err, res) {
        // 连接出错
        if (err) {
            // 打印错误日志
            console.log(err);
            return
        }
        Templete.pageCurrent = pageCurrent
        Templete.pageSize = pageSize
        Templete.total = res.length
        // 将数据返回给前端
        Templete.data = res
        response.send(Templete)
    })
})


// 根据不同的新闻类型进行展示 1
newsExpress.get('/newsType', (request, response) => {
    // 获取前端路由参数 (id)
    let type = request.query.type
    // 连接数据库，根据id查找
    newsMoedl.find({ 'type': type }, function (err, res) {
        // 连接错误
        if (err) {
            console.log(err);
            return
        }
        // 将数据返回给前端
        Templete.data = res
        response.send(Templete)
    })


})



// 获取新闻类型列表
newsExpress.get('/typeList', (request, response) => {
    newType.find({}, function (err, res) {
        // 连接出错
        if (err) {
            // 打印错误日志
            console.log(err);
            return
        }
        console.log(res);
        // 将数据返回给前端
        Templete.data = res
        response.send(Templete)
    })

})


module.exports = newsExpress
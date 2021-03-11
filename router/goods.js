// 路由模块
const express = require('express')
const goods = express.Router();
// 连接数库模块
const goodsModel = require('../module/goods')

goods.get('/goodslist', (req, respone) => {
    // 分页查询数据
    goodsModel.find({}, function (err, res) {
        if (err) {
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


module.exports = goods
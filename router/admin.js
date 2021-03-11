const express = require('express');
const admin = express.Router();

const adminDB = require('../module/admin')

// 登录接口
admin.get('/login', (requset, response) => {
    console.log(requset.query.name); 
    adminDB.find({}, function (err, res) {
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
        response.send(data)
    })
});
// req.query.userName 获取前端传递的query参数
// req.body.参数名称   获取前端传递的body参数
// 测试git提交数据
// 获取系统用户接口
admin.get('/list', (req, res) => {
    res.send('admin用户列表页');
})

module.exports = admin;




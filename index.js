
const express = require('express')
const bodyParser = require('body-parser'); 
// 连接数据
const app = express()
//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, No-Cache, X-Requested-With, If-Modified-Since, Pragma, Last-Modified, Cache-Control, Expires, Content-Type, X-E4M-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
// 获取请求参数
app.use(bodyParser.urlencoded({  
    extended: true
}));
// 定义参数的格式
// app.use(bodyParser.json());  

// 配置路由模块
// 权限模块接口
const admin = require('./router/admin');
// 商品模块接口
const goods = require('./router/goods');
// 新闻资讯模块
const news = require('./router/news')

// 管理权限模块
app.use('/admin',admin);
// 商品模块
app.use('/goods',goods);
// 新闻资讯
app.use('/news',news)


app.listen(3001,()=>console.log('服务器启动成功'))


var express = require('express');
// 做配置
// var config = require('./config/index');
// 当前环境下，或是其他文件
// var port = process.env.PORT || config.build.port;
// 启动
var app = express();

var router = express.Router();
// 定义路由
router.get('/', function (req, res, next) {
    req.url = '/index.html';
    next();
});

app.use(router);

var appData = require('./data.json');
var seller = appData.seller;
var goods = appData.goods;
var ratings = appData.ratings;

var apiRoutes = express.Router();
apiRoutes.get('/goods', function (req, res) {
    res.json({
        errno: 0,
        data: goods
    });
});

apiRoutes.get('/seller', function (req, res) {
    res.json({
        errno: 0,
        data: seller
    });
});

apiRoutes.get('/ratings', function (req, res) {
    res.json({
        errno: 0,
        data: ratings
    });
});

app.use('/api', apiRoutes);

app.use(express.static('./dist'));

module.exports = app.listen(8080);

const express = require('express')
const app = express()
let apiRoutes = express.Router()
app.use('/api', apiRoutes)

var appData = require('./data.json');
var seller = appData.seller;
var goods = appData.goods;
var ratings = appData.ratings;
module.exports = {
    productionSourceMap: false,
    devServer: {
        before (app) {
            app.get('/api/goods', function (req, res) {
                res.json({
                    errno: 0,
                    data: goods
                });
            });
            
            app.get('/api/seller', function (req, res) {
                res.json({
                    errno: 0,
                    data: seller
                });
            });
            
            app.get('/api/ratings', function (req, res) {
                res.json({
                    errno: 0,
                    data: ratings
                });
            }); 
        }
    }
}

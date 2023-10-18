var express = require('express');
var router = express.Router();
const dashboardRouter = require('./dashboard')
const itemsRouter = require('./item')
const homeRouter = require('./home')
/* GET home page. */
router.use('/', homeRouter)
router.use('/item', itemsRouter)
router.use('/dashboard', dashboardRouter)

module.exports = router;

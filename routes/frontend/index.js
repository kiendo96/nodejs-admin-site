var express = require('express');
var router = express.Router();
const homeRouter = require('./home')
/* GET home page. */
router.use('/', homeRouter)

module.exports = router;

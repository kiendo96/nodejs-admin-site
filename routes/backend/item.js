var express = require('express');
var router = express.Router();
const {listItems} = require('../../controllers/items')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('pages/items/list', { title: 'Item List Page' });
// });
router.get('(/:status)?', listItems)
router.get('/add', function(req, res, next) {
  res.render('pages/items/add', { title: 'Item Add Page' });
});

module.exports = router;

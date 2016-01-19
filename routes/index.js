var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Galvanize Reads' });
});

router.get('/books', function(req, res, next) {
  res.render('books', { title: 'Galvanize Reads' });
});

router.get('/authors', function(req, res, next) {
  res.render('authors', { title: 'Galvanize Reads' });
});

module.exports = router;

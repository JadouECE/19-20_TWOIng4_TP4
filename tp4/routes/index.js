var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET films. */
router.get('/movies', function(req, res, next) => {
  const {id}=req.params;
  const movie = _.find(movie,["id",id]);
  res.render('index', { title: 'Express' });
});

/* GET films par id */
router.get('/movies/:id', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* PUT film par nom */
router.get('/movies/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* UPDATE film par id */
router.get('/movies/:id', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* DELETE film par id */
router.get('/movies/id', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;


var express = require('express');
var router = express.Router();

const heroesService = require('../hero-service');

router.get('/heroes', function(req, res, next) {
 
  heroesService.get(req, res);
});

router.post('/hero', function(req, res, next){
	heroesService.create(req, res);
});

module.exports = router;

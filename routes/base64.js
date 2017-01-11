/**
 * Created by tujiaw on 2017/1/11.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('base64', { title: 'base64编解码' });
});

module.exports = router;

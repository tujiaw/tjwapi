/**
 * Created by tujiaw on 2017/1/11.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('base64img', { title: 'base64图片' });
});

module.exports = router;

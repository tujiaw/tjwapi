/**
 * Created by tujiaw on 2017/1/11.
 */
var express = require('express');
var router = express.Router();
var Base64 = require('js-base64').Base64;

/* GET home page. */
router.post('/encode_base64', function(req, res, next) {
  console.log('xxxxxx');
  if (req.body.text) {
    var dstText = Base64.encode(req.body.text);
    res.json({ success: 1, text: dstText });
  } else {
    res.json({ success: 0, error: 'is null'})
  }
});

router.post('/decode_base64', function(req, res, next) {
  if (req.body.text) {
    var dstText = Base64.decode(req.body.text);
    res.json({ success: 1, text: dstText });
  } else {
    res.json({ success: 0, error: 'is null'})
  }
});
module.exports = router;

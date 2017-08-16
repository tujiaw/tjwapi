/**
 * Created by tujiaw on 2017/1/11.
 */
var express = require('express');
var router = express.Router();
var Base64 = require('js-base64').Base64;
var request = require('request')
var fs = require('fs')
var path = require('path')

const dirname = 'uploadImages'
const hostdir = "./public/mito/"
function mkdirSync(dirname) {
    if (fs.existsSync(dirname)) {
        return true;
    } else {
        if (mkdirSync(path.dirname(dirname))) {   
            fs.mkdirSync(dirname);
            return true;
        }
    }
    return false
}

function downloadUrl(urlList) {
    for (const url of urlList) {
      const first = url.indexOf(dirname)
      const last = url.lastIndexOf('/')
      if (first > 0 && last > 0) {
        const name = url.substr(last + 1)
        const dir = url.substr(first, last - first)
        const dstpath = hostdir + dir + '/' + name
        if (name.length && dir.length && !fs.existsSync(dstpath)) {
          if (mkdirSync(hostdir + dir)) {
            console.log(dstpath)
            request(url).pipe(fs.createWriteStream(dstpath))
          }
        }
      }
    }
}

/* GET home page. */
router.post('/encode_base64', function(req, res, next) {
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

router.post('/download_images', function(req, res, next) {
  const json = req.body.json
  if (json && json.smallList) {
    downloadUrl(json.smallList)
    downloadUrl(json.bigList)
  }
  res.json({
    success: 0
  })
})
module.exports = router;

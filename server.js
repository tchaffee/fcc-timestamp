var express = require('express');
var app = express()

app.get('/:dateParam', function (req, res) {
  var resObj = {};  
  var resDate;
  var options = {
    year: "numeric", 
    month: "long",
    day: "numeric"
  };
  
  if (isNaN(req.params.dateParam)) {
    resDate = new Date(req.params.dateParam);
  } else {
    resDate = new Date(req.params.dateParam * 1000);
  }

  resObj.unix = resDate / 1000;
  
  if (resObj.unix) {
    resObj.natural = resDate.toLocaleDateString('en-us', options);
  } else {
    resObj.natural = null;
  }
  
  res.send(resObj);
})

app.listen(8080, function () {
  console.log('Timestamp app listening on port 8080.')
})
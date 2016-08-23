var express = require('express');
var app = express();

app.set('json spaces', 4);

app.get('/', function (req, res) {
  res.json({
      "IP Address": req.headers['x-forwarded-for'],
      "Language": req.headers["accept-language"],
      "Operating System": req.headers['user-agent']
    });
});

app.listen(process.env.PORT || 8080, function () {
  console.log('Header Parser app is listening');
});
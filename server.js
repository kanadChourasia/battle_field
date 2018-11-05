var express = require('express');
var jsend = require('jsend');
var bodyParser = require('body-parser');
require('dotenv').config();
require('./lib/dbi/db');

var app = express();
var port = process.env.PORT || 3000

app.use(jsend.middleware);
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }));

app.listen(port,(err)=>{
   if(err) throw err
   console.log("Yippee App is running on port",port)
})

module.exports = {
    app
}

require('./routes/routes');


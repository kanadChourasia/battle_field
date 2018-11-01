var express = require('express');
var jsend = require('jsend');
require('dotenv').config();
require('./lib/dbi/db');

var app = express();
var port = process.env.PORT || 3000

app.use(jsend.middleware);

app.get("*",(req,res)=>{
	
	res.send("<H1>App is Running</H1>")
})


app.listen(3000,(err)=>{
   if(err) throw err
   console.log("Yippee App is running on port",port)
})

module.exports = {
    app
}

require('./routes/routes');


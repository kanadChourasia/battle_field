var express = require('express');
var jsend = require('jsend');
require('dotenv').config();
require('./lib/dbi/db');

var app = express();

app.use(jsend.middleware);

app.get("*",(req,res)=>{
	
	res.send("<H1>App is Running</H1>")
})


app.listen(3000,(err)=>{
   if(err) throw err
   console.log("Yippee App is running on port 3000")
})

module.exports = {
    app
}

require('./routes/routes');


var express = require("express")
var app = express();
var port = process.env.PORT || 3000

app.get("*",function(req,res){
   res.send("<H1>App is Running</H1>")
})


app.listen(port,function(err){
   if(err) throw err
   console.log("Yippee App is running on port",port)
})


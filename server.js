var express = require("express")
var app = express();

app.get("*",function(req,res){
	
	res.send("<H1>App is Running</H1>")
})


app.listen(3000,function(err){
   if(err) throw err
   console.log("Yippee App is running on port 3000")
})


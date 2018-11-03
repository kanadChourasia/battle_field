var app = require('./../server').app;
var Auth = require('./../lib/task_functions/auth');

app.post('/login',(req,res)=>{
    let authObj = new Auth();
    let body = req.body;
    authObj.authenticate(body,(error,jwtSign)=>{
        if(error){
            res.jsend.error(error)
        }
        else{
            res.jsend.success(jwtSign)
        }
    })
})
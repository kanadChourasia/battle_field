var appHelper = require('./appHelper');
var Auth = function(){}

Auth.prototype.authenticate = (credentials,callback)=>{
    if(credentials.user == process.env.USER){
        if(credentials.password == process.env.password){
            callback(null,appHelper.generateJWT({user:process.env.USER,password:process.env.password}))
        }
        else{
            callback("password is not correct...");
        }
    }
    else{
        callback("user doesn't exist...");
    }
}

Auth.prototype.verifyAuthenticity = (token,callback)=>{
    appHelper.decodeJWT(token,(error,data)=>{
        if(error || typeof data == 'undefined'){
            callback("Authentication failed !!");
        }
        else{
            callback(null,data);
        }
    })
}

module.exports = Auth;
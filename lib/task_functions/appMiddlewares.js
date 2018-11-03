var appHelper = require('./appHelper');
var Auth = require('./auth');

var appMiddleware = {
    verifyAuthenticity: (req,res,next)=>{
        let authObj = new Auth();
        let token = (!!req.headers.authorization) ? req.headers.authorization.split(' ')[1] : undefined;

        authObj.verifyAuthenticity(token,(error,data)=>{
            if(error){
                res.jsend.error(error);
            }
            else{
                next();
            }
        })
    }
}

module.exports = appMiddleware;
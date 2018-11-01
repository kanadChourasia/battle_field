var appHelper = require('./appHelper');

var AppMiddleware = ()=>{}

AppMiddleware.prototype.verifyAuthenticity = (req, res, next)=>{
    let token = (!!req.headers.authorization) ? req.headers.authorization.split(' ')[1] : undefined;
    appHelper.decodeJWT(token,(error,data)=>{
        if(error || typeof data == 'undefined'){
            res.jsend.error("Authentication failed !!");
        }
        else{
            req.jwtPayload = data; //add jwt token to the request
            next();
        }
    })
}

module.exports = AppMiddleware;
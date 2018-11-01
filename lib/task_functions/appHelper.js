var jwt = require('jsonwebtoken');

let appHelper = {

    generateJWT: (data)=>{
        return jwt.sign(data,process.env.SECRET);
    },

    decodeJWT: (token,callback)=>{
        jwt.verify(token,process.env.SECRET,function(err, decoded){
            callback(err,decoded)
        });
    }

}



module.exports = appHelper;
var mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_CONN_URL, {
    useMongoClient: true
},function (err) {
    if(err) throw err;
    console.log('==========db-connected============')
});
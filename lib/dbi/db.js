var mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_CONN_URL, {
    useNewUrlParser: true
},function (err) {
    if(err) throw err;
    console.log('==========db-connected============')
});
var mongoose = require('mongoose');
var BattleModel = require('./../models/battles');

var BattleDBI = ()=>{}

BattleDBI.prototype.getAllBattlePlaces = (callback)=>{
    BattleModel.aggregate([
        {
            $group:{
                _id:{"location":"$location", "region":"$region"}
            }
        },
        {
            $replaceRoot:{
                newRoot: "$_id"
            }
        }
    ],function(err,data){
        callback(err,data)
    })
}

BattleDBI.prototype.getAllBattleCount = (callback)=>{
    BattleModel.find({}).count().exec(function(error,data){
        callback(error,data);
    })
}

module.exports = BattleDBI;
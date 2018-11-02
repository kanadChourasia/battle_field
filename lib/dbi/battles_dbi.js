var mongoose = require('mongoose');
var BattleModel = require('./../models/battles');

var BattleDBI = function(){}

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
    ],(err,data)=>{
        callback(err,data)
    })
}

BattleDBI.prototype.getAllBattleCount = (callback)=>{
    BattleModel.find({}).count().exec((error,data)=>{
        callback(error,data);
    })
}

BattleDBI.prototype.getMostActiveAttackerKing = (callback)=>{
    BattleModel.aggregate([
        {
            $group:{
                _id:"$attacker_king",
                count:{"$sum":1}
            }
        },
        {
            $sort:{count:-1}
        },
        {
            $limit:1
        }
    ],(error,data)=>{
        callback(error,data)
    })
}

BattleDBI.prototype.getMostActiveDefenderKing = (callback)=>{
    BattleModel.aggregate([
        {
            $group:{
                _id:"$defender_king",
                count:{"$sum":1}
            }
        },
        {
            $sort:{count:-1}
        },
        {
            $limit:1
        }
    ],(error,data)=>{
        callback(error,data)
    })
}

BattleDBI.prototype.getMostActiveRegion = (callback)=>{
    BattleModel.aggregate([
        {
            $group:{
                _id:"$region",
                count:{"$sum":1}
            }
        },
        {
            $sort:{count:-1}
        },
        {
            $limit:1
        }
    ],(error,data)=>{
        callback(error,data)
    })
}

BattleDBI.prototype.getAttackerOutcomes = (callback)=>{
    BattleModel.aggregate([
        {
            $group:{
                _id:"$attacker_outcome",
                count:{"$sum":1}
            }
        }
    ],(error,data)=>{
        callback(error,data)
    })
}

BattleDBI.prototype.getUniqueBattleTypes = (callback)=>{
    BattleModel.aggregate([
        {
            $group:{
                _id:"$battle_type"
            }
        }
    ],(error,data)=>{
        callback(error,data)
    })
}

BattleDBI.prototype.getDefenderStats = (callback)=>{
    BattleModel.aggregate([
        {
            $group:{
                _id:null,
                avg_defender_size:{"$avg":"$defender_size"},
                max_defender_size:{"$max":"$defender_size"},
                min_defender_size:{"$min":"$defender_size"}
            }
        }
    ],(error,data)=>{
        callback(error,data)
    })
}

BattleDBI.prototype.getSearchResults = (query,callback)=>{
    BattleModel.find(query,(error,data)=>{
        callback(error,data)
    })
}

module.exports = BattleDBI;
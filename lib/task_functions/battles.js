var BattleDBI = require('./../dbi/battles_dbi');
var async = require('async');

var Battles = function(){}

Battles.prototype.getAllBattlePlaces = (callback)=>{
    let battleDBIObj = new BattleDBI();
    battleDBIObj.getAllBattlePlaces((error,battlePlaces)=>{
        battlePlaces = JSON.parse(JSON.stringify(battlePlaces),(key,value)=>{
            if(value == null){
                value = undefined;
            }
            return value;
        })
        callback(error,battlePlaces);
    })
}

Battles.prototype.getAllBattleCount = (callback)=>{
    let battleDBIObj = new BattleDBI();
    battleDBIObj.getAllBattleCount((error,battleCount)=>{
        callback(error,battleCount);
    })
}

Battles.prototype.getBattleStats = (callback)=>{
    let battleDBIObj = new BattleDBI();
    async.parallel(
        [
            battleDBIObj.getMostActiveAttackerKing,
            battleDBIObj.getMostActiveDefenderKing,
            battleDBIObj.getMostActiveRegion,
            battleDBIObj.getAttackerOutcomes,
            battleDBIObj.getUniqueBattleTypes,
            battleDBIObj.getDefenderStats
        ],
        (error,data)=>{
            if(error){
                callback(error);
            }
            else{
                let stats = {
                    most_active:{
                        attacker_king: data[0][0]._id,
                        defender_king: data[1][0]._id,
                        region: data[2][0]._id
                    },
                    attacker_outcome:{
                        win: data[3].filter((elem)=>{return elem._id == "win"})[0].count,
                        loss: data[3].filter((elem)=>{return elem._id == "loss"})[0].count,
                    },
                    battle_type:data[4].map((elem)=>{return elem._id}).filter((elem)=>{ return !!elem}),
                    defender_size:{
                        average: data[5][0].avg_defender_size,
                        min: data[5][0].min_defender_size,
                        max: data[5][0].max_defender_size
                    }
                }
                callback(null,stats);
            }
        }
    )
}

Battles.prototype.searchOptions = (searchData)=>{

}

module.exports = Battles
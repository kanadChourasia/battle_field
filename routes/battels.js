var app = require('./../server').app;
var Battles = require('./../lib/task_functions/battles');

app.get('/list',(req,res)=>{
    let battlesObj = new Battles();
    battlesObj.getAllBattlePlaces((error,battlePlaces)=>{
        if(error){
            res.jsend.error(error.message)
        }
        else{
            res.jsend.success(battlePlaces)
        }
    })
})

app.get('/count',(req,res)=>{
    let battleObj = new Battles();
    battleObj.getAllBattleCount((error,battleCount)=>{
        if(error){
            res.jsend.error(error.message)
        }
        else{
            res.jsend.success(battleCount)
        }
    })
})

app.get('/stats',(req,res)=>{
    let battleObj = new Battles();
    battleObj.getBattleStats((error,stats)=>{
        if(error){
            res.jsend.error(error.message)
        }
        else{
            res.jsend.success(stats)
        }
    })
})
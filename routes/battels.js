var app = require('./../server').app;
var Battles = require('./../lib/task_functions/battles');
var appMiddleware = require('./../lib/task_functions/appMiddlewares')

app.get('/list',appMiddleware.verifyAuthenticity,(req,res)=>{
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

app.get('/count',appMiddleware.verifyAuthenticity,(req,res)=>{
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

app.get('/stats',appMiddleware.verifyAuthenticity,(req,res)=>{
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

app.get('/search',appMiddleware.verifyAuthenticity,(req,res)=>{
    let battleObj = new Battles();
    battleObj.searchOptions(req.query,(error,result)=>{
        if(error){
            res.jsend.error(error.message)
        }
        else{
            res.jsend.success(result)
        }
    })
})
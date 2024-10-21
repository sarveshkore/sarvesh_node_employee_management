module.exports=function(app){
    app.post("/api/mongo_db/create_api/",function(req,res){
        const postgres_create_api = require(__dirname+"/../src/mongo_db/create_api.js");
        postgres_create_api.main(req,res);
    })

    app.get("/api/mongo_db/read_api/",function(req,res){
        const postgres_read_api = require(__dirname+"/../src/mongo_db/read_api");
        postgres_read_api.main(req,res);
    })
    app.delete("/api/mongo_db/delete_api/",function(req,res){
        const update_api = require(__dirname+"/../src/mongo_db/delete_api");
        update_api.main(req,res);
    }) 
    app.put("/api/mongo_db/update_api/",function(req,res){
        const update_api = require(__dirname+"/../src/mongo_db/update_api");
        update_api.main(req,res);
    }) 
}
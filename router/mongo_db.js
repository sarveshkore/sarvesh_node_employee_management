module.exports=function(app){
    app.post("/api/mongo_db/create_api_mongo/",function(req,res){
        const postgres_create_api = require(__dirname+"/../src/mongo_db/create_api_mongo.js");
        postgres_create_api.main(req,res);
    })

    app.get("/api/mongo_db/read_api_mongo/",function(req,res){
        const postgres_read_api = require(__dirname+"/../src/mongo_db/read_api_mongo");
        postgres_read_api.main(req,res);
    })
    app.delete("/api/mongo_db/delete_api_mongo/",function(req,res){
        const update_api = require(__dirname+"/../src/mongo_db/delete_api_mongo");
        update_api.main(req,res);
    }) 
    app.put("/api/mongo_db/update_api_mongo/",function(req,res){
        const update_api = require(__dirname+"/../src/mongo_db/update_api_mongo");
        update_api.main(req,res);
    }) 
}
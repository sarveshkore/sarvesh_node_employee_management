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

        //PRACTICE API
    app.post('/api/mongo_db_practice/prac_create_insertOne/',(req,res)=>{
        const l=require('../src/mongo_db_practice/prac_create_insertOne');
        l.main(req,res);
    });

    app.get("/api/mongo_db_practice/prac_read_find/",function(req,res){
        const update_api = require('../src/mongo_db_practice/prac_read_find');
        update_api.main(req,res);
    });
    app.put("/api/mongo_db_practice/prac_update_updateOne/", function(req, res) {
        const l = require('../src/mongo_db_practice/prac_update_updateOne');
        l.main(req, res);
    });
    
    app.delete('/api/mongo_db_practice/prac_delete_deleteOne/',(req,res)=>{
        const l=require('../src/mongo_db_practice/prac_delete_deleteOne');
        l.main(req,res);
    });

    app.post('/api/mongo_db_practice/prac_create_insertMany/',(req,res)=>{
        const l=require('../src/mongo_db_practice/prac_create_insertMany');
        l.main(req,res);
    });

    app.delete('/api/mongo_db_practice/prac_delete_deleteMany/',(req,res)=>{
        const l=require('../src/mongo_db_practice/prac_delete_deleteMany');
        l.main(req,res);
    });
    app.put("/api/mongo_db_practice/prac_update_updateMany/", function(req, res) {
        const l = require('../src/mongo_db_practice/prac_update_updateMany');
        l.main(req, res);
    });

    //aggregate functions
    app.get("/api/mongo_db_practice/prac_aggregation_function/",function(req,res){
        const update_api = require('../src/mongo_db_practice/prac_aggregation_function');
        update_api.main(req,res);
    });
}
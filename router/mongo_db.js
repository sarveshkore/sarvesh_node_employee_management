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
    app.post('/api/mongo_db_practice/prac_create_api_mongo_insertOne/',(req,res)=>{
        const l=require('../src/mongo_db_practice/prac_create_api_mongo_insertOne');
        l.main(req,res);
    });

    // app.put("/api/mongo_db_practice/prac_update_api_mongo_updateOne/",function(req,res){
    //     const update_api = require('/../src/mongo_db_practice/prac_update_api_mongo_updateOne');
    //     update_api.main(req,res);
    // });
    app.put("/api/mongo_db_practice/prac_update_api_mongo_updateOne/", function(req, res) {
        const l = require('../src/mongo_db_practice/prac_update_api_mongo_updateOne');
        l.main(req, res);
    });
    
    app.delete('/api/mongo_db_practice/prac_delete_api_mongo_deleteOne/',(req,res)=>{
        const l=require('../src/mongo_db_practice/prac_delete_api_mongo_deleteOne');
        l.main(req,res);
    });
}
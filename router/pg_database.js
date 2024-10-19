module.exports=function(app){
    app.post("/api/pg_sql_db/create_api_pg/",function(req,res){
        const postgres_create_api = require(__dirname+"/../src/pg_sql_db/create_api_pg");
        postgres_create_api.main(req,res);
    })
    app.get("/api/v1/pg_sql_db/read_api_pg/",function(req,res){
        const postgres_read_api = require(__dirname+"/../src/pg_sql_db/read_api_pg");
        postgres_read_api.main(req,res);
    })
    app.get("/api/v1/pg_sql_db/pagination/",function(req,res){
        const postgres_pagination = require(__dirname+"/../src/pg_sql_db/pagination");
        postgres_pagination.main(req,res);
    })
    app.get("/api/v1/pg_sql_db/sort_api_data_pg/",function(req,res){
        const postgres_read_api = require(__dirname+"/../src/pg_sql_db/sort_api_data_pg");
        postgres_read_api.main(req,res);
    })
    app.put("/api/v1/pg_sql_db/update_api_pg/:id",function(req,res){
        const update_api = require(__dirname+"/../src/pg_sql_db/update_api_pg");
        update_api.main(req,res);
    })
    app.delete("/api/v1/pg_sql_db/delete_api_pg/:id",function(req,res){
        const postgres_delete_api = require(__dirname+"/../src/pg_sql_db/delete_api_pg");
        postgres_delete_api.main(req,res);
    })

    app.delete("/api/v1/pg_sql_db/drop_table_api_pg",function(req,res){
        const postgres_delete_api = require(__dirname+"/../src/pg_sql_db/drop_table_api_pg");
        postgres_delete_api.main(req,res);
    })
    app.post("/api/pg_sql_db/create_table_api_pg/",function(req,res){
        const postgres_create_api = require(__dirname+"/../src/pg_sql_db/create_table_api_pg");
        postgres_create_api.main(req,res);
    })

    //pg_sql_db_joins
    app.post("/api/pg_sql_db_joins/create_table_pg_joins/",function(req,res){
        const postgres_create_api = require(__dirname+"/../src/pg_sql_db_joins/create_table_pg_joins");
        postgres_create_api.main(req,res);
    })
    app.post("/api/pg_sql_db_joins/create_api_pg_joins/",function(req,res){
        const postgres_create_api = require(__dirname+"/../src/pg_sql_db_joins/create_api_pg_joins");
        postgres_create_api.main(req,res);
    })
    app.get("/api/pg_sql_db_joins/read_api_pg_joins/",function(req,res){
        const postgres_read_api = require(__dirname+"/../src/pg_sql_db_joins/read_api_pg_joins");
        postgres_read_api.main(req,res);
    })
    app.put("/api/pg_sql_db_joins/update_api_pg_joins/:id",function(req,res){
        const update_api = require(__dirname+"/../src/pg_sql_db_joins/update_api_pg_joins");
        update_api.main(req,res);
    }) 
       app.delete("/api/v1/pg_sql_db_joins/delete_api_pg_joins/:id",function(req,res){
        const postgres_delete_api = require(__dirname+"/../src/pg_sql_db_joins/delete_api_pg_joins");
        postgres_delete_api.main(req,res);
    })
    }
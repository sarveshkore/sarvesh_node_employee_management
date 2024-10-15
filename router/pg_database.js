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

    }
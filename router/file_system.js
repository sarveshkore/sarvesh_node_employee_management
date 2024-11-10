module.exports=function(app){
    // PRACTICE FILE SYSTEM

    app.post('/file_system_practice/prac_write_file_async/',function(req,res){
        let write_api=require('../src/file_system_practice/prac_write_file_async');
        write_api.main(req,res);
    });
    app.get('/file_system_practice/prac_read_file_async/',function(req,res){
        let read_api=require('../src/file_system_practice/prac_read_file_async');
        read_api.main(req,res);
    });
    app.delete('/file_system_practice/prac_unlink_file_async/',function(req,res){
        let delete_api=require('../src/file_system_practice/prac_unlink_file_async');
        delete_api.main(req,res);
    });
    app.post('/file_system_practice/prac_write_file_sync/',function(req,res){
        let write_api=require('../src/file_system_practice/prac_write_file_sync');
        write_api.main(req,res);
    });
    app.get('/file_system_practice/prac_read_file_sync/',function(req,res){
        let read_api=require('../src/file_system_practice/prac_read_file_sync');
        read_api.main(req,res);
    });
    app.delete('/file_system_practice/prac_unlink_file_sync/',function(req,res){
        let delete_api=require('../src/file_system_practice/prac_unlink_file_sync');
        delete_api.main(req,res);
    });
    app.post('/file_system_practice/prac_make_dir_async/',function(req,res){
        let make_dir_api=require('../src/file_system_practice/prac_make_dir_async');
        make_dir_api.main(req,res);
    })
    app.post('/file_system_practice/prac_make_dir_file_async/',function(req,res){
        let make_dir_file_api=require('../src/file_system_practice/prac_make_dir_file_async');
        make_dir_file_api.main(req,res);
    })
    app.post('/file_system_practice/prac_generate_multiple_files_async/',function(req,res){
        let make_dir_file_api=require('../src/file_system_practice/prac_generate_multiple_files_async');
        make_dir_file_api.main(req,res);
    })
    app.post('/file_system_practice/prac_generate_multiple_files_sync/',function(req,res){
        let make_dir_file_api=require('../src/file_system_practice/prac_generate_multiple_files_sync');
        make_dir_file_api.main(req,res);
    })
    app.put('/file_system_practice/prac_append_file_async/',function(req,res){
        let make_dir_file_api=require('../src/file_system_practice/prac_append_file_async');
        make_dir_file_api.main(req,res);
    })
    app.put('/file_system_practice/prac_append_file_sync/',function(req,res){
        let make_dir_file_api=require('../src/file_system_practice/prac_append_file_sync');
        make_dir_file_api.main(req,res);
    })
    app.get('/file_system_practice/prac_read_dir_async/',function(req,res){
        let make_dir_file_api=require('../src/file_system_practice/prac_read_dir_async');
        make_dir_file_api.main(req,res);
    })
    app.delete('/file_system_practice/prac_rmdir_async/', function (req, res) {       
        let y=require('../src/file_system_practice/prac_rmdir_async');
        
        y.main(req,res);
        
    })
    app.get('/file_system_practice/prac_combine_multiple_file/',function(req,res){
        let make_dir_file_api=require('../src/file_system_practice/prac_combine_multiple_file');
        make_dir_file_api.main(req,res);
    })
}
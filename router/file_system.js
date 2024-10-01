module.exports=function(app){
    app.get('/file_system/read_file_async', function (req, res) {       
    let y=require('../src/file_system/read_file_async');
    
    y.main(req,res);
   
})

app.get('/file_system/read_file_sync', function (req, res) {       
    let y=require('../src/file_system/read_file_sync');
    
    y.main(req,res);
   
})



    app.post('/file_system/write_file_async', function (req, res) {       
        let y=require('../src/file_system/write_file_async');
        
        y.main(req,res);
        
    })
    app.post('/file_system/write_file_sync', function (req, res) {       
        let y=require('../src/file_system/write_file_sync');
        
        y.main(req,res);
        
    })

    app.put('/file_system/rename_file', function (req, res) {       
        let y=require('../src/file_system/rename_file');
        
        y.main(req,res);
        
    })

    app.put('/file_system/append_file', function (req, res) {       
        let y=require('../src/file_system/append_file');
        
        y.main(req,res);
        
    })
    
    app.delete('/file_system/unlink_file', function (req, res) {       
        let y=require('../src/file_system/unlink_file');
        
        y.main(req,res);
        
    })

    app.get('/file_system/generate_multiple_files', function (req, res) {       
        let y=require('../src/file_system/generate_multiple_files');
        
        y.main(req,res);
       
    })

    app.post('/file_system/combine_multiple_files', function (req, res) {       
        let y=require('../src/file_system/combine_multiple_files');
        
        y.main(req,res);
       
    })

    app.post('/file_system/read_dir', function (req, res) {       
        let y=require('../src/file_system/read_dir');
        
        y.main(req,res);
       
    })
}
function main(req,res){
    const fs=require('fs');
    const folder=req.query.folder;
    const file=req.query.files;
    fs.readdir(folder,(err,files)=>{
        console.log(`files : ${JSON.stringify(files)}`);
        for(let i=0;i<files.length;i++){
            let append_data=fs.readFileSync(`./new_data/${files[i]}`,'utf-8');
            fs.appendFile('merge.txt',append_data,()=>{
                console.log(`data appended : ${append_data}`);
            });            
        }
    });
}

module.exports={
    main:main
}
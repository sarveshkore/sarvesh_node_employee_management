function main(req,res){
    const fs=require('fs');
    const folder=req.query.folder;
    const file=req.query.files;
    fs.readdir(folder,(err,files)=>{
        console.log(`files : ${JSON.stringify(files)}`);
        for(let i=0;i<files.length;i++){
            // console.log(files.length);
            // console.log(files[i]);
            // console.log(fs.readFileSync(`./new_data/${files[i]}`,'utf-8'));
            let append_data=fs.readFileSync(`./new_data/${files[i]}`,'utf-8');
            fs.appendFile('merge.txt',append_data,()=>{
                console.log(`data appended : ${append_data}`);
            });
            // fs.readFileSync(folder+files[i],'utf-8')
            // let append_data=fs.readFileSync(`${folder}/${file}_i`,'utf-8')
            // console.log(append_data);
            //     fs.appendFile('merge.txt',append_data);
            
        }
    });
}

module.exports={
    main:main
}
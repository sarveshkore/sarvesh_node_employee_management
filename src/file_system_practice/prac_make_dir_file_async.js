function main(req,res){
    const fs=require('fs');
    let data=req.body;
    fs.mkdir('fs_mkdir',()=>{
        console.log('folder created')
        fs.writeFile('fs_mkdir/new_file.txt',JSON.stringify(data),(err)=>{
            console.log('file created',data);
            res.send(data);
        });
    });
}

module.exports={
    main:main
}
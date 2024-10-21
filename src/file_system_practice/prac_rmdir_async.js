function main(req,res){
    const fs=require('fs');
    let folder=req.query.folder;
    fs.rmdir(folder,{recursive:true,force:true},(err)=>{
        console.log(err || 'folder deleted');
        res.send(err || `Folder deleted: ${folder}`);
    })
}
module.exports={
    main:main
}

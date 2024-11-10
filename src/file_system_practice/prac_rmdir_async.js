function main(req,res){
    const fs=require('fs');
    fs.rmdir('fs_practice',{recursive:true,force:true},(err)=>{
        console.log(err || 'folder deleted');
        res.send(`Folder deleted: `);
    })
}
module.exports={
    main:main
}

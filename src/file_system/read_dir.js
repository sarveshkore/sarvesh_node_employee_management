function main(req,res){
    const fs=require('fs');

    fs.readdir('./new_folder',(err,files)=>{
        console.log("Files:" +files);
        res.send(files)  
    })
}
module.exports={
    main:main
}
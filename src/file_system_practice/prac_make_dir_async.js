function main(req,res){
    const fs=require('fs');
    fs.mkdir('fs_practice',(err)=>{
        console.log('folder created');
        res.send('folder created');
    });
}
module.exports={
    main:main
}
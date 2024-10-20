function main(req,res){
    const fs=require('fs');
    let data=req.body;
    fs.appendFile('file.txt',JSON.stringify(data)+'\n',()=>{
        console.log(data);
    })
}
module.exports={
    main:main
}
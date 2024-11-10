function main(req,res){
    const fs=require("fs");
    fs.unlink('data_async.txt',(err)=>{
        console.log('File deleted Successfully');
        if(err){console.log(err);}
        else{res.send('File  deleted successfully');}
    })
}
module.exports={
    main:main
}
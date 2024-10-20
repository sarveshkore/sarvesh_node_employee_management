function main(req,res){
    const fs=require("fs");
    fs.unlink('f1_created.txt',(err)=>{
        console.log('File deleted Successfully');
        if(err){console.log(err);}
        else{res.send('File  deleted successfully');}
    })
}
module.exports={
    main:main
}
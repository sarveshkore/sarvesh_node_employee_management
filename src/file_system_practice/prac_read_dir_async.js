function main(req,res){
    const fs=require('fs');
    fs.readdir('./new_data',(err,files)=>{
        console.log(err||files);
        res.send(err||files );
    });
}

module.exports={
    main:main
}

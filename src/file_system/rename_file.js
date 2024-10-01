function main(req,res){
    const fs=require('fs');
    fs.rename('demo1.txt','demo.txt',(err)=>{
        if(err) throw err;
        console.log(err);
        res.send('Rename Done ');
    });
}
module.exports={
    main:main
}
function main(req,res){
    const fs=require('fs')
    fs.readFile("demo.txt",'utf-8',(err,data)=>{
        console.log(data);
        res.send(data);
    })
   
    
}
module.exports={
    main:main
}
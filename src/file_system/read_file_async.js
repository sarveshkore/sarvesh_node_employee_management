function main(req,res){
    const fs=require('fs')
    fs.readFile("demo.txt",'utf-8',(err,data)=>{
        if(err){}
        else{
            console.log(data);
            
            res.send(data)
        }
    })
   
    
}
module.exports={
    main:main
}
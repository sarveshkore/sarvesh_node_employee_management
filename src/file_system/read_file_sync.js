function main(req,res){
    const fs=require('fs')
    let readFileSync=fs.readFileSync("demo.txt",'utf-8');
    // function a(err,data){
    //     if(err){}
    //     else{
    //         console.log(data);
            
    //         res.send(data)
    //     }
    // }
    // a(data);
    console.log(readFileSync);
    res.send(readFileSync)
    
}
module.exports={
    main:main
}
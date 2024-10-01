function main(req,res){
    const fs=require('fs');

    // let data=req.body;
    // console.log(data);
    
    // let a=fs.writeFile('demo.txt',JSON.stringify(data),(err)=>{
    //     // console.log(err);
    //     if(err){
    //         res.send("Error");
    //     }
    //     else{

    //         // console.log("done");
    //         res.send("done");
    //     }
    // });
    let writeFileSync=fs.writeFileSync('demo.txt','demo data');
    console.log(writeFileSync);
    res.send(writeFileSync);
    
}
module.exports={
    main:main
}
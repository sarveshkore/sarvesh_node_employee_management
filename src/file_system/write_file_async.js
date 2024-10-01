function main(req,res){
    const fs=require('fs');

    let data=req.body;
    console.log(data);
    
    fs.writeFile('demo.txt',JSON.stringify(data),(err)=>{
        // console.log(err);
        if(err){
            res.send("Error");
        }
        else{

            // console.log("done");
            res.send("done");
        }
    });
    
}
module.exports={
    main:main
}
function main(req,res){
    const fs=require("fs");
    let data=req.body;
    let writeFileSync=fs.writeFileSync('status.txt',JSON.stringify(data));
    console.log(writeFileSync);
    res.send(writeFileSync);
}
module.exports={
    main:main
}
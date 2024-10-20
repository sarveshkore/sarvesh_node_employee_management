function main(req,res){
    const fs=require("fs");
    let readFileSync=fs.readFileSync('status.txt','utf-8');
    console.log(readFileSync);
    res.send(readFileSync);
}
module.exports={
    main:main
}
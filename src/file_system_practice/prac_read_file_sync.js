function main(req,res){
    const fs=require("fs");
    let readFileSync=fs.readFileSync('data_sync.txt','utf-8');
    console.log(readFileSync);
    res.send(readFileSync);
}
module.exports={
    main:main
}
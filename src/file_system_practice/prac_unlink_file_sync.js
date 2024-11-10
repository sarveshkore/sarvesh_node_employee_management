function main(req,res){
    const fs=require("fs");
    let unlinkSync=fs.unlinkSync('data_sync.txt');
    console.log('unlinkSync done ',unlinkSync);
    res.send('File Deleted Successfully');
}
module.exports={
    main:main
}
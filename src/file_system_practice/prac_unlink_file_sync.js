function main(req,res){
    const fs=require("fs");
    let unlinkSync=fs.unlinkSync('status.txt');
    console.log('unlinkSync done ',unlinkSync);
    res.send('File Deleted Successfully');
}
module.exports={
    main:main
}
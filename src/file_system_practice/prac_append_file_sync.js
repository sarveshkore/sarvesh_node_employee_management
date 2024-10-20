function main(req,res){
    const fs=require('fs');
    let data=req.body;
    fs.appendFileSync('file.txt',JSON.stringify(data));
        console.log('file appended');
        res.send('file appended');
}
module.exports={
    main:main
}
function main(req,res){
    const fs=require('fs');
    let data=req.body;
    fs.appendFile('data_async.txt',JSON.stringify(data).split(",")+"\n",()=>{
        console.log(data);
    })
    console.log('Data appended:', data);
    res.send(`Appended data: ${JSON.stringify(data)}`);
}
module.exports={
    main:main
}
function main(req,res){
    const fs=require("fs");
    let folder = req.query.folderName;
    let file = req.query.fileName;
    let n=req.query.number;
    const data=req.body;
    fs.mkdir(folder,{recursive:true},()=>{
        console.log(`folder created : ${folder}`);
        for(let i=1;i<=n;i++){
            data["index"] = i;
            // fs.writeFile(folder+'/'+file+`_${i}`+'.txt',JSON.stringify(data),()=>{
                fs.writeFile(`${folder}/${file}_${i}.txt`,JSON.stringify(data),()=>{

                console.log(`file created ${file}`);
                console.log('data inserted :',data);
            })
        }
        res.send(`folder created : ${folder}, file created : ${file}`);
    });
}

module.exports={
    main:main
}

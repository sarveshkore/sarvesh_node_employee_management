const append_file = require('./append_file');

function main(req,res){
    const fs=require('fs');
  
    fs.readdir('./new_folder',(err,files)=>{
        console.log(files.length);
        // console.log(files);
        
        for (let i = 0; i < files.length; i++) {
            var data=(files[i])
            // console.log(data);
            
            var mergeData=(fs.readFileSync("new_folder/"+data,"utf-8"));
            
            (fs.appendFileSync("merge.txt",mergeData))
            //  res.send( fs.readFileSync("merge.txt"))
        }


        // fs.writeFileSync("appended_file",JSON.stringify(data))
        // if (err) throw err;
        // for(let i=0;i<=files.length;i++){
        //     console.log("hi");
        //     var data={}
        //     var data=JSON.stringify(files[i])
        //     res.send((data[i]));
            
        //     // fs.appendFile("appended_file",data,(err)=>{
        //     //     res.send("done")
        //     // })
        //     // console.log("Files:" +files);
        //     // res.send(files)  
        // }
        

    })
}
module.exports={
    main:main
}
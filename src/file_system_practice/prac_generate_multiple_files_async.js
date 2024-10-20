function main(req,res){
    const fs=require("fs");
    const data=req.body;
    fs.mkdir('multiple_files',{recursive:true},()=>{
        console.log('folder created')
        for(let i=1;i<=5;i++){
            // fs.writeFile('file'+`${i}`+'.txt',JSON.stringify(data),()=>{         //file created but not in the multiple_files directory.
            fs.writeFile('multiple_files/file'+`${i}`+'.txt',JSON.stringify(data),()=>{

                console.log('file created');
                console.log('data inserted :',data);
            })
        }
    })
}

module.exports={
    main:main
}
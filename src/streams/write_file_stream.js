function main(req,res){
    const fs=require('fs');
    let rs=fs.createReadStream('./bigDataFile.txt');
    let ws=fs.createWriteStream('./duplicatebigDataFile.txt');
    // var arr=[]
    // let x=0;
    rs.on('data',function(chunk){
        // arr.push(chunk.toString()+",")
        // x++;
        // console.log(chunk.toString().length);
        // console.log(x);
        ws.write(chunk.toString());
    })
    // console.log("arr ="+arr.length)
    rs.on('end',function(){
        // console.log(x);
        // console.log(object)
        ws.read()
        console.log('end')
    })

    
}
module.exports={
    main:main
}
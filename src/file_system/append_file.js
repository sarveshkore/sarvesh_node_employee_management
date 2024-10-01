function main(req,res){
    const fs=require('fs');
    fs.appendFile('demo.txt', 'Hello I am Appended Data. ', (err) => {
        if (err) throw err;
        console.log('The "data to append" was appended to file!');
        res.send("Data Appended Successfully");
      }); 
}
module.exports={
    main:main
}
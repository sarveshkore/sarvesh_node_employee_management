function main(req,res){
    const fs=require('fs');

    fs.unlink('demo.txt', (err) => {
        if (err) throw err;
        console.log('successfully deleted ');
        res.send("File Deleted")
    });
}
module.exports={
    main:main
}
function main(req,res){
    const fs=require("fs");
    let data=req.body;
    fs.writeFile("data_async.txt", JSON.stringify(data), (err) => {
        if (err) {
            console.log("Error writing file", err);
            res.status(500).send("Error writing file");
        } else {
            console.log("File written successfully");
            res.send("File written successfully!");
        }
    });
}
module.exports={
    main:main
}
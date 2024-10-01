const fs = require('fs');
function main(req, res) {
    let folder = req.query.folderName;
    let file = req.query.fileName;
    let n=req.query.number;
    let data = req.body;
    let error_flag = false;

    fs.mkdir(folder,{recursive:true},
        (err) => {
            try {
                for (let i = 0; i <= n; i++) {
                    console.log(i,error_flag);
                    if(error_flag== true){
                        // res.send()
                    console.log(i,"error_flag true: ",error_flag);
                        
                        break;
                    }
                    data["index"] = i;
                 
                       fs.writeFile(folder + "/" + file + `_${i}.txt`, JSON.stringify(data), (err) => {
                         try {
                               if (err) {
                                    console.log(err);
                                    error_flag= true;
                                   res.send(err);
                                   return;
                               } else {
                                   res.send("Done");
                               }
                        } catch (error) {
                            console.log(error);
                            error_flag= true;

                            // res.send(error);
                            return;
                        }
                       })
               
                }
                console.log('Directory created successfully!');
            res.send('Directory created successfully!')

            } catch (error) {
                error_flag= true;
                res.send(error);
                console.log(error)
                return
            }
            
        });
}
module.exports = {
    main: main
}
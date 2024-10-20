function main(req,res){
    const fs=require('fs');
    fs.readdir('./new_data',(err,files)=>{
        console.log(err||files);
        res.send(err||files );
    });
}

module.exports={
    main:main
}

// function main(req, res) {
//     const fs = require('fs');

//     // Reading directory contents
//     fs.readdir('./new_data', (err, files) => {
//         console.log(err || 'Files:', files);
//         res.send(err || files);  // Sending error or list of files as the response
//     });
// }

// module.exports = {
//     main: main
// };

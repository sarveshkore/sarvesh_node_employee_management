// function main(req,res){
//     res.send('hello');
// }

// module.exports={
//     main:main
// }

function main(req,res){

    const { v4: uuidv4 } = require('uuid');
    // console.log(uuidv4()); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
    const token=req.body.token;
    
    var jwt = require('jsonwebtoken');
    var verify_name = jwt.verify(token,'9e3f9b4c-973f-4815-89e9-0a1c2805c423');
    console.log(verify_name);
    res.send(verify_name);
}

module.exports={
    main:main
}
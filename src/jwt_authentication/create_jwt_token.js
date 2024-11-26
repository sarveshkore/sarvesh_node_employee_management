function main(req,res){
    const { v4: uuidv4 } = require('uuid');
    // console.log(uuidv4()); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
    const name=req.body.name;
    // console.log(uuidv4())
    var jwt = require('jsonwebtoken');
    var token = jwt.sign(JSON.stringify(req.body), '9e3f9b4c-973f-4815-89e9-0a1c2805c423');
    console.log(token);
    res.send(token);
}

module.exports={
    main:main
}
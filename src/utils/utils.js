

function main(req,res){
    var jwt = require('jsonwebtoken');
    function getJwtToken(data){
       jwt.sign(data,'9e3f9b4c-973f-4815-89e9-0a1c2805c423')
        
    }

    function verifyJwtToken(data){
        jwt.verify(data,'9e3f9b4c-973f-4815-89e9-0a1c2805c423')
    }
    // res.send('hello')
}
module.exports={
    main:main
}
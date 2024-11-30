


    const { json } = require('body-parser');
var jwt = require('jsonwebtoken');
    function getJwtToken(data){
        console.log(data);
        
       return jwt.sign(JSON.parse(data),'9e3f9b4c-973f-4815-89e9-0a1c2805c423', { expiresIn: '10s' });
        
    }
    
    function verifyJwtToken(token){
       return    jwt.verify(token,'9e3f9b4c-973f-4815-89e9-0a1c2805c423');
    }

    // res.send('hello')
    

module.exports={
    getJwtToken,
    verifyJwtToken
}
async function main(req,res){
    // res.send("login")

    const email=req.body.email;
    const password=req.body.password;

    // console.log(email,password)
    const utils=require('../utils/utils')
    // console.log(utils.getJwtToken)
    let y=utils.getJwtToken(JSON.stringify(req.body))
    
    let x={
        'data':{
            'token':y,
        }
    }
    
    res.send(x)
}
module.exports={
    main

}
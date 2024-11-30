function main(req,res){
    const fs=require("fs");
    let data=req.body;
    let {token}=req.headers
    console.log(token)
    const utils=require('../utils/utils')
    let x=utils.verifyJwtToken(token)
    if (x) {
        let writeFileSync=fs.writeFileSync('data_sync.txt',JSON.stringify(data));
        console.log(writeFileSync);
        res.send(writeFileSync);
        res.send('verified user')
    } else {
        res.send('not verified'+writeFileSync)
    }
}
module.exports={
    main:main
}
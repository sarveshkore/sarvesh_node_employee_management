
async function main(req,res){
    
    const email=req.body.email;
    const name=req.body.name; 
    const mobile=req.body.mobile;
    // const message=req.body.mailMessage;


    const Joi = require('joi');

const schema = Joi.object({
    name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

 

        mobile: Joi.number()
        .integer()
        .max(9999999999)
        .min(1000000000),

        mobile2:Joi.string().min(10).max(10),
        address:Joi.object(),
        arr:Joi.array(),
        boolean:Joi.boolean(),
    // email: Joi.string()
    //     .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
})
    
const schema2=Joi.object({
    city:Joi.string().required(),
    state:Joi.string().required(),
    country:Joi.string().required(),
    pincode:Joi.number().integer().min(100000).max(999999)
})

const nu=parseInt('1234567890')
const add={
    city:'mumbai',
    state:'maharashtra',
    country:'india',
    pincode:'400001',

}
// const schema3=Joi.array({})
const array=['a','b','c',1]
// const array={
//     'helo':'hi',
// }
// const bool=12
const bool=false
// const data=await schema.validate({ name: 'rupesh', mobile: '1234567890',email:'abc@gmail.com '});
const data=await schema.validate({ name: 'rupesh', mobile:nu,mobile2:'1234567890',arr:array,address:add,boolean:bool});
// const data2=await schema2.validate(address);

console.log('data');
console.log(data)
// console.log(data2);


}
module.exports={
    main
}
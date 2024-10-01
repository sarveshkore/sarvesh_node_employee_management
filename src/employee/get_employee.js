// app.get('/employee/v1/get_employee',function(req,res){
//     let x=require("D:\SITH\SITH NODEJS\sarvesh_node_employee_management\src\employee");
//     // let x=require('../src/employee/get_employee');
//     x.main(req,res);
// });


function main(req,res){
    console.log("Hello");
    res.send('sarvesh');
}
module.exports={
main:main
}
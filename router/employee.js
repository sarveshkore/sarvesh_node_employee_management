//all api routers stored
// app.get('/', function (req, res) {                              
//     res.send(req._events);
//     console.log(req);
// })

// app.get('/employee/:id',function(req,res){
//     console.log(req.params.id)
//     res.send()
// })

// app.get('/employee/:name/:id',function(req,res){
//     console.log(req.params)
//     res.send()
// })


// app.post('/employee/',function(req,res){
//     console.log(req.params)
//     let input=req.query
//     console.log(input)
//     res.send(input)
// })

// app.post('/employee/',function(req,res){
//     let body=req.body
//     console.log(req.body)
//     res.send(body)
// })


// module.exports=function(app){
//     app.get('/employee/get_employee', function (req, res) {       
//     let x=require('../src/employee/get_employee');
//     // res.send(req._events);
//     console.log("X",x)
//     x.main(req,res);
//     // console.log(req);
// })}

module.exports=function(app){
    app.get('/employee/get_employee', function (req, res) {       
    let x=require('../src/employee/get_employee');
 
    console.log("X",x)
    x.main(req,res);
   
})

}



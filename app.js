const express = require('express');
var bodyParser = require('body-parser');
const app = express();       //instance1
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.get('/', function (req, res) {                              
//     res.send(req._events)
//     console.log(req)
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

require ( "./router")(app);



app.listen(9998,()=>{
    console.log(`server is running `)
})


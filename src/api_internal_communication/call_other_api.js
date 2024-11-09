var Client = require('node-rest-client').Client;
async function main(req,res){
    const { MongoClient } = require('mongodb');
    const url = 'mongodb://localhost:27017';
    const client = new MongoClient(url);
    var rest = new Client();
    var arr=[]
    var x=[]
    var y=[]
    await client.connect();
    console.log('Connected successfully to server');
    
    await rest.get('http://localhost:9998/file_system/read_file_async',(main_data,data)=>{
        // console.log(data);
        //  arr.push(main_data)
        // res.send(main_data)
        if(main_data){

            x.push(main_data)
            arr.push(x);
        }
        })
        // arr.push(a);

    // await rest.get('http://localhost:9998/api/mongo_db_practice/prac_aggregation_function/',(main_data,data)=>{
    //         // console.log(data);
    //         if(main_data){
    //             y.push(main_data)
    //         arr.push(y);
    //         }
    //         // arr.push(main_data)
    //         // res.send(main_data)
    // })
    // arr.push(b);

    if (arr.length!=0) {
        console.log(arr)
        
        res.send(arr)
    }

}
module.exports={
    main:main
}
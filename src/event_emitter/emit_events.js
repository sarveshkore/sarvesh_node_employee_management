function main(req,res){
    const EventEmitter = require('events');
    const eventEmitter = new EventEmitter();

    // eventEmitter.on('greet', (name) => {
    //     console.log(`Hello, ${name}!`);
    // });
    
    // // Emit the 'greet' event
    // eventEmitter.emit('greet', 'Alice');


    // eventEmitter.on('event_1',(req,res)=>{
    //     for(let i=0;i<=4;i++){
    //         console.log('hello')
    //     }
    //     return 
    // });

    // eventEmitter.on('event_1',(req,res)=>{
    //     console.log('executed')
    //     return
    // });

    // eventEmitter.emit('event_1');
    // eventEmitter.emit('event_1');
    // eventEmitter.emit('event_1');
    // eventEmitter.emit('event_1');
    // eventEmitter.emit('event_1');
    // eventEmitter.emit('event_1');
    // eventEmitter.emit('event_1');
    // eventEmitter.emit('event_1');
    // eventEmitter.emit('event_1');
    // eventEmitter.emit('event_1');


    // eventEmitter.once('event_2',(req,res)=>{
    //     console.log('event_2    ');
    // });
    // eventEmitter.once('event_2',(req,res)=>{
    //     console.log('event_ 3');
    // });
    // eventEmitter.once('event_2',(req,res)=>{
    //     console.log('event_4');
    // });
    // eventEmitter.once('event_2',(req,res)=>{
    //     console.log('event_5 ');
    // });
    // eventEmitter.emit('event_2');
    // eventEmitter.emit('event_2');
    // eventEmitter.emit('event_2');



    //  eventEmitter.on('event_1',(req,res)=>{
    //     console.log('event_ executed')
    //     return 
    // });

    // eventEmitter.on('event_2',(req,res)=>{
    //     console.log('event_ executed')
    //     return
    // });
    // eventEmitter.on('event_3',(req,res)=>{
    //     console.log('event_ executed')
    //     return 
    // });

    // eventEmitter.on('event_4',(req,res)=>{
    //     console.log('event_ executed')
    //     return
    // });
    // eventEmitter.on('event_5',(req,res)=>{
    //     console.log('event_ executed')
    //     return 
    // });

    // eventEmitter.on('event_6',(req,res)=>{
    //     console.log('event_ executed')
    //     return
    // });eventEmitter.on('event_7',(req,res)=>{
    //     console.log('event_ executed')
    //     return 
    // });

    // eventEmitter.on('event_8',(req,res)=>{
    //     console.log('event_ executed')
    //     return
    // });

    // eventEmitter.on('event_9',(req,res)=>{
    //     console.log('event_ executed')
    //     return 
    // });

    // eventEmitter.on('event_10',(req,res)=>{
    //     console.log('event_ executed')
    //     return
    // });eventEmitter.on('event_11',(req,res)=>{
    //     console.log('event_ executed')
    //     return 
    // });

    // eventEmitter.on('event_12',(req,res)=>{
    //     console.log('event_ executed')
    //     return
    // });eventEmitter.on('event_13',(req,res)=>{
    //     console.log('event_ executed')
    //     return 
    // });

    // eventEmitter.on('event_14',(req,res)=>{
    //     console.log('event_ executed')
    //     return
    // });

        // eventEmitter.emit('event_1');
        // eventEmitter.emit('event_2');
        // eventEmitter.emit('event_3');
        // eventEmitter.emit('event_4');
        // eventEmitter.emit('event_5');
        // eventEmitter.emit('event_6');
        // eventEmitter.emit('event_7');
        // eventEmitter.emit('event_8');
        // eventEmitter.emit('event_9');
        // eventEmitter.emit('event_10');
        // eventEmitter.emit('event_11');
        // eventEmitter.emit('event_12');
        // eventEmitter.emit('event_13');
        // eventEmitter.emit('event_14');
        // eventEmitter.setMaxListeners(eventEmitter.getMaxListeners()+4)
        // // eventEmitter.setMaxListeners(eventEmitter.getMaxListeners())
        // console.log(eventEmitter.getMaxListeners())
        // eventEmitter.on('event_1',(req,res)=>{
        //     console.log('event_1 executed')
        //     return
        // });
        // eventEmitter.on('event_1',(req,res)=>{
        //     console.log('event_2 executed')
        //     return
        // });
        // eventEmitter.on('event_1',(req,res)=>{
        //     console.log('event_3 executed')
        //     return
        // });
        // eventEmitter.on('event_1',(req,res)=>{
        //     console.log('event_ executed')
        //     return
        // });
        // eventEmitter.on('event_1',(req,res)=>{
        //     console.log('event_ executed')
        //     return
        // });
        // eventEmitter.on('event_1',(req,res)=>{
        //     console.log('event_ executed')
        //     return
        // });
        // eventEmitter.on('event_1',(req,res)=>{
        //     console.log('event_ executed')
        //     return
        // });
        // eventEmitter.on('event_1',(req,res)=>{
        //     console.log('event_ executed')
        //     return
        // });
        // eventEmitter.on('event_1',(req,res)=>{
        //     console.log('event_ executed')
        //     return
        // });
        // eventEmitter.on('event_1',(req,res)=>{
        //     console.log('event_ executed')
        //     return
        // });
        // eventEmitter.on('event_1',(req,res)=>{
        //     console.log('event_ executed')
        //     return
        // });
        // eventEmitter.on('event_1',(req,res)=>{
        //     console.log('event_ executed')
        //     return
        // });
        // eventEmitter.on('event_1',(req,res)=>{
        //     console.log('event_ executed')
        //     return
        // });

        // eventEmitter.emit('event_1');
        let a=()=>
            {
            console.log('connection done')
            }
        eventEmitter.on('connection',a);
        eventEmitter.emit('connection');
        eventEmitter.off('connection',a)
        eventEmitter.emit('connection');
        
        
}

module.exports={
    main
}
    // require mongodb client
    // const MongoClient = require('mongodb').MongoClient;
    const {MongoClient,ObjectID} = require('mongodb');

    // connect to mongodb client using the portnumber and callback function with error and client args
    MongoClient.connect('mongodb://localhost:27017/Todoapp',{useNewUrlParser: true},(err,client)=>{

    // handle error if we can't connect to the mongo server
    if(err){
        return console.log('Unable to connect to Mongodb server ' + err);
    }

    // create a Database using the client argument
    const db = client.db('TodosApp');

    // db.collection('Todos').find().toArray().then((docs)=>{

    //     console.log('Todos:');

    //     console.log(JSON.stringify(docs,undefined,2));

    // },(err)=>{
    //     if(err){
    //         console.log(`There was an error: ${err}`);
    //     }
    // });

    // db.collection('Todos').find().count().then((count)=>{

    //     console.log(`Todos count: ${count}`);

    //     // console.log(JSON.stringify(docs,undefined,2));

    // },(err)=>{
    //     if(err){
    //         console.log(`There was an error: ${err}`);
    //     }
    // });

    db.collection('Users').find({name:'Nwagba Chisom'}).toArray().then((docs)=>{
        console.log(`name:`);
        console.log(JSON.stringify(docs,undefined,2));
    },(err)=>{
        console.log(`Error: ${err}`);
    });

    
    console.log('connected to server');
    
    
    // close the connection
    // client.close();

});
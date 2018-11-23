    // require mongodb client
    // const MongoClient = require('mongodb').MongoClient;
    const {MongoClient,ObjectID} = require('mongodb');

    // connect to mongodb client using the portnumber and callback function with error and client args
    MongoClient.connect('mongodb://localhost:27017/Todoapp',(err,client)=>{

    // handle error if we can't connect to the mongo server
    if(err){
        return console.log('Unable to connect to Mongodb server ' + err);
    }


    console.log('connected to server');
    // create a Database using the client argument
    const db = client.db('TodosApp');


    // insert to a collection to the database
    db.collection('Todos').insertOne({

        text: 'something to do',
        completed: false

    },(err,result)=>{
        if(err){
            return console.log('cannot connect');
        }


        console.log(JSON.stringify(result.ops,undefined,2));
    })

        db.collection('Users').insertOne({

            name: 'Nwagba Okechukwu',
            age: 22,
            location: 'Enugu'

        },(err, result)=>{
            if(err){
                return console.log(`Cannot connect to server Error: ${err}`);
            }

            console.log(JSON.stringify(result.ops,undefined,2));
        })

    // close the connection
    client.close();

});
// requrie MongoClient and ObjectID
const {MongoClient, ObjectID} =  require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Todoapp',{useNewUrlParser: true},(err,client)=>{

if(err){
   return console.log(`Error: ${err}`);
}

var db = client.db('TodosApp');

var myQuery = { _id: new ObjectID('5bf41a08b8333460b7d8b1bf')};
var mySecQuery = {name: 'Nwagba Oechukwu'};

// update and entry
// db.collection('Todos').findOneAndUpdate(myQuery,{
//     $set:{
//         completed: true
//     }
// },{returnOriginal: false}).then((result)=>{
//     console.log(result);
// });

db.collection('Users').findOneAndUpdate(mySecQuery,{
    $set:{
        name: 'Nwagba Okechukwu' 
    },$inc: {
        age: 1
    }
},{returnOriginal: false}).then((result)=>{
    console.log(result);
});



client.close();
});
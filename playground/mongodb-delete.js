// requrie MongoClient and ObjectID
const {MongoClient, ObjectID} =  require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Todoapp',{useNewUrlParser: true},(err,client)=>{

if(err){
   return console.log(`Error: ${err}`);
}

var db = client.db('TodosApp');

var myQuery = { _id: new ObjectID('5bf819ae80ef261863d3a52f')};
var mySecQuery = {name: 'Nwagba Okechukwu'};

// delete many entries
// db.collection('Todos').deleteMany(myQuery).then((result)=>{
//     console.log(result);
// },(err)=>{

// });

// db.collection('Users').deleteMany(mySecQuery).then((obj)=>{
//     console.log(obj);
// },(err)=>{

// });


// delete one entry
// db.collection('Todos').deleteOne(myQuery).then((result)=>{
//     console.log(result);
// },(err)=>{

// });


// find and entry and delete
// db.collection('Users').findOneAndDelete(myQuery).then((result)=>{
//     console.log(result);
// },(err)=>{

// });









});


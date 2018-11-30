// ID validation in mongoose( alternative way of querying data)

// require mongoose configuration
const {mongoose} = require('./../server/DB/mongooseconfig');

const {ObjectID} = require('mongodb');

// require mongoose models
    const {Todos} = require('./../server/models/Todos');
    const {Users} = require('./../server/models/Users'); 



var UserId = '5bfc3828e6f9f20c27e2f0ae';

// var id = '5bfbeb3ea551896c61868fc6';

// if(!ObjectID.isValid(id)){
//     console.log('Id is not valid');
// }

// Todos.find({
//     _id:id

// }).then((todos)=>{
//                     console.log(`Todos: ${JSON.stringify(todos,undefined,2)}`);
// },(err)=>{
//     console.log(JSON.stringify(err,undefined,2));
// });

// Todos.findOne({
//     _id:id

// }).then((todos)=>{
//     console.log(`Todos: ${JSON.stringify(todos,undefined,2)}`);
// },(err)=>{
//     console.log(JSON.stringify(err,undefined,2));
// });

// Todos.findById(id).then(
//     (todos)=>{

//         if(!todos){
//             return console.log(`Id does not exsit`)
//         }
//         console.log(JSON.stringify(todos,undefined,2))
//     }
// );


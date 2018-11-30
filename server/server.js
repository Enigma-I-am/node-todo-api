// require the express and body-parser modules for API endpoints and routes
var express = require('express');
var bodyparser = require('body-parser');


// require the mongoose configuration file
var {mongoose} = require('./DB/mongooseconfig.js');

const {ObjectID} = require('mongodb');

// require the Todos and Users models for writing to database
var {Todos} =  require('./models/Todos');
var {Users}= require('./models/Users');

// The app variable initializes express
var app = express();


// this methos is a middleware which tells express how to serve api endpoint
app.use(bodyparser.json());

// this sets up the express route for the said API
app.post('/todos',(req,res)=>{
    var todo = new Todos({ 
        text: req.body.text
    });

    todo.save().then((doc)=>{
        res.status(400).send(doc);
    },(err)=>{
        console.log(`Error: ${err}`); 
    });
});

// Get todo by Id
app.get('/todos/:id',(req,res)=>{

    var id = req.params.id;

    if(!ObjectID.isValid(id)){
           return console.log(`there was an error ${res.status(400).send(err)}`);
        }


    Todos.findById(id).then((todos)=>{

        if(!todos){
            return res.status(400).send(err);
        }

            res.send({
                todos
            });
    }).catch((e)=>{
        return console.log(`there was an erroe ${res.status(400).send(err)}`);
    })
        
});


// Get all todos
app.get('/todos',(req,res)=>{



    Todos.find().then((todos)=>{
        res.send({
            todos
        });
    },(err)=>{
        console.log(`Error: ${err}`);
    });


});

// This runs our server on a port number (here the number is 3000)
app.listen(8080,()=>{
    console.log(`Server is running on port 8080`);
});
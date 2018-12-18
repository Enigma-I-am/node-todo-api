const _ = require('lodash');

// require the express and body-parser modules for API endpoints and routes
const express = require('express');
const bodyparser = require('body-parser');


// require the mongoose configuration file
const {mongoose} = require('./DB/mongooseconfig.js');

const {ObjectID} = require('mongodb');

// require the Todos and Users models for writing to database
const {Todos} =  require('./models/Todos');
const {Users}= require('./models/Users');

// The app variable initializes express
const app = express();

const port = process.env.PORT || 8080 ;


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

// remove todo by id
app.delete('/todos/:id',(req,res)=>{

    var id = req.params.id;

    if(!ObjectID.isValid(id)){
        return console.log('ID is Invalid');
    }


    Todos.findByIdAndRemove(id).then((todo)=>{

        if(!todo){
            return res.status(400).send(err);
        }

        res.send(console.log(`todo has been deleted`));

    }).catch((err)=>{
        console.log(err);
    });

});


// Update a todo by its id
app.patch('/todos/:id',(req,res)=>{

    var id = req.params.id;
    var body = _.pick(req.body,['text','completed']);

    if(!ObjectID.isValid(id)){
        return console.log('ID is Invalid');
    }

    if(_.isBoolean(body.completed) && body.completed){
        body.completedAt = new Date().getTime();
    }else{
        body.completed = false;
        body.completedAt = null;
    }

    Todos.findByIdAndUpdate(id,{$set:body}, {  new: true  }).then((todo)=>{

        if(!todo){
            return res.status(400).send();
        }

        res.send({todo});

    }).catch(()=>{

    res.status(400).send();

    });

});


// This runs our server on a port number (here the number is 3000)
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});

module.exports = {app};
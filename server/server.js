var express = require('express');
var bodyparser = require('body-parser');

var {mongoose} = require('./DB/mongooseconfig.js');
var {Todos} =  require('./models/Todos');
var {Users}= require('./models/Users');

var app = express();

app.use(bodyparser.json());

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

app.listen(3000,()=>{
    console.log(`Server is running on port 3000`);
});
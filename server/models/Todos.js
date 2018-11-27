// This is a model file for Todo entry

// require mongoose
var mongoose = require('mongoose');

// Todos variable is simply a mongoose model
var Todos = mongoose.model('Todo',{

    text:{
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },
    completed:{

        type: Boolean,
        default:false
    },
    completedAt:{

        type: Number,
        default:null
    }
});

// export the mongoose model
module.exports = {Todos};
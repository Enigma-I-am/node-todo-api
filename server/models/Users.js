// This is a model file for user info

// require mongoose
var mongoose = require('mongoose');

// User variable is simply a mongoose model
var User = mongoose.model('User',{

    email:{
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }

});

// export the mongoose model
module.exports = {User};
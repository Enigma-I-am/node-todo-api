// This file configures the mongoose to work with our mongo-Database
// mongoose is simple an ORM like Room on android 



const mongoose = require('mongoose');     // require mongoose
// configure mongoose to use promises
mongoose.Promise = global.Promise;
// connect mongoose to a your localhost (server)
mongoose.connect(process.env.MONGODB_URI||'mongodb://localhost:27017/Todoapp', { useNewUrlParser: true });

// export mongoose configurations
module.exports = {mongoose};
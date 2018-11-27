const mongoose = require('mongoose');     // require mongoose
// configure mongoose to use promises
mongoose.Promise = global.Promise;
// connect mongoose to a your localhost (server)
mongoose.connect('mongodb://localhost:27017/Todoapp', { useNewUrlParser: true });


module.exports = {mongoose};
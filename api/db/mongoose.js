const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TaskManager', {useNewUrlParser: true},function(){
    console.log("Connected to mongodb successfully");
}).catch(function(){
    console.log("Error with the connection to mongodb");
});

mongoose.set('useCreateIndex',true);
mongoose.set('useFindAndModify',false);

module.exports = {
    mongoose
}
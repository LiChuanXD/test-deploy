const mongoose = require('mongoose');
const MONGO_URI = require('../config/config').MONGO_URI;

//connect to database
mongoose.connect(MONGO_URI , {
    useUnifiedTopology : true,
    useNewUrlParser : true
} , err=>{
    if(err) console.log(err);
    console.log("Connected to 'todo' database.")
});

//schema
const todoSchema = new mongoose.Schema({
    todo : {
        type : String,
        required : true
    }
} , {
    timestamps : true
});

//model
const Todo = mongoose.model("Todo" , todoSchema);

//export
module.exports = Todo;

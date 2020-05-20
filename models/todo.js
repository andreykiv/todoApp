var mongoose = require("mongoose");

//SCHEMA
var todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "Name cannot be blank!"
    },
    completed: {
        type: Boolean,
        default: false
    },
    created_date: {
        type: Date,
        default: Date.now
    }
})

//MODEL
var Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;


//name
//completed (boolean)
//created date

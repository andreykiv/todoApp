var express  = require('express');
var router   = express.Router();
var db       = require("../models");

//LIST ALL
router.get("/", function(req, res){
    db.Todo.find()
    .then(function(todos){
        res.json(todos);
    })
    .catch(function(err){
        res.send(err);
    })
});

//CREATE ROUTE
router.post("/", function(req, res){
    db.Todo.create(req.body)
    .then(function(newTodo){
        res.status(201).json(newTodo);
    })
    .catch(function(err){
        res.send(err);
    })
});

//SHOW ROUTE
router.get('/:todoId', function(req, res){
    db.TodofindById(req.params.todoId)
    .then(function(foundTodo){
        res.json(foundTodo)
    })
    .catch(function(err){
        res.send(err);
    })
})


//UPDATE ROUTE
router.put("/:todoId", function(req, res){
    db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true}) //the new true code makes that the request is responded with a new version. 
    .then(function(todo){
        res.json(todo);
    })
    .catch(function(err){
        res.send(err);
    })
});

//DELETE ROUTE
router.delete("/:todoId", function(req, res){
    db.Todo.remove({_id: req.params.todoId})
    .then(function(){
        res.json({message: "We deleted that!"})
    })
    .catch(function(err){
        res.send(err);
    })
})

module.exports = router; 
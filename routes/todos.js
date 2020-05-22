var express  = require('express');
var router   = express.Router();
var db       = require("../models");
var helpers = require("../helpers/todos");

//LIST ALL, CREATE ROUTE

router.route("/")
.get(helpers.getTodos)
.post(helpers.createTodo)

//SHOW ROUTE, UPDATE ROUTE, DELETE ROUTE
router.route("/:todoId")
.get(helpers.getTodo)
.put(helpers.updateTodo)
.delete(helpers.deleteTodo)


module.exports = router; 
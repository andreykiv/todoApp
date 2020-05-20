var express = require('express'),
    app     = express(); 
var port    = process.env.PORT || 3000;
var bodyParser = require("body-parser"); // allows us to access the body of a PUT or POST request. 
    
var todoRoutes = require("./routes/todos");

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.send({message: "Hello from ROOT ROUTE"});
});

app.use("/api/todos", todoRoutes);
    
    
app.listen(port, function(){
    console.log("APP is running on PORT " + process.env.PORT);
})
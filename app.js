/*=================================INIT - BEGIN===============================*/
const express         = require("express"),
      app             = express(),
      bodyParser      = require('body-parser'),
      dotenv          = require("dotenv").config(); // Configure .env variables

app.use(express.static(__dirname + '/public'));     

app.use(bodyParser.urlencoded({extended : true})); // application/x-www-form-urlencoded
app.use(bodyParser.json()); // application/json

/* Create route variables*/
const apiRoutes         = require("./routes/api");

// require routes
app.use("/api", apiRoutes);

/*=================================INIT - END=================================*/
/*=================================LISTEN - BEGIN=============================*/
app.listen(process.env.PORT, function(){
  console.log("Server Started");
});
/*=================================LISTEN - END===============================*/

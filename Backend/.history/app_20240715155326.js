const express = require("express");
const mongoose = require("mongoose");

const app = express();

//Middlewares
 
app.use('/', (req, res, next) => {
    res.send("This is our starting app");
})

mongoose.connect("mongodb+srv://jgnanak1:6NQXz6Fn8cIffuJn@cluster0.4nw70vm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

)
.then(() => console.log("Connected To Database"))
  .then(() => {
      app.listen(5000);
  })
  .catch((err) => console.log(err));
//6NQXz6Fn8cIffuJn
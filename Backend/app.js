const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");

const app = express();

// Middlewares
app.use(express.json());
app.use("/books", router); // localhost:5000/books

mongoose
  .connect("mongodb+srv://jgnanak1:6NQXz6Fn8cIffuJn@cluster0.4nw70vm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));

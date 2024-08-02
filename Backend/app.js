const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
const userRouter = require("./routes/user-routes");

require("dotenv").config();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: true,
  credentials: true,
}
));
app.use("/books", router); // localhost:5000/books
app.use("/users", userRouter);
mongoose
  .connect("mongodb+srv://jgnanak1:6NQXz6Fn8cIffuJn@cluster0.4nw70vm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"   )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));



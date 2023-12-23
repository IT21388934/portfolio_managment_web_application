const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

//middleware
app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//connect to mongodb
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to mongodb");
    app.listen(process.env.PORT || 3000, () => {
      console.log(`sever is running on port ${process.env.PORT || 3000}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

//routes
const userRoute = require("./routes/userRoute");
app.use("/api/users", userRoute);

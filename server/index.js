const express = require("express");
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const db = require("./models");

//Routers
const postRouter = require('./routes/Post');
app.use("/post", postRouter);

const userRouter = require('./routes/Users');
app.use("/auth", userRouter);

db.sequelize.sync().then(() => {
  app.listen(3002, () => {
    console.log("Server running on port 3001");
  });
});
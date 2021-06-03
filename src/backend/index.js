const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routesUrls = require("./routes/routes");

dotenv.config();
mongoose.connect(
  process.env.DATABASE_ACCESS,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Database connected")
);

app.use(express.json());
app.use(cors());
app.use("/api/user", routesUrls);
app.listen(3101, () => {
  console.log("running port 3101");
});

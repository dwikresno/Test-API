const express = require("express");
const app = express();
const config = require("./src/configs/database");

app.use(express.json());

const appRouteDepartment = require("./src/routes/route-department");

app.use("/", appRouteDepartment);

app.listen(8080, function () {
  console.log("Server running on Port :" + 8080);
});

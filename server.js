const express = require("express");
const cookieParser = require("cookie-parser");
const { protectRoute } = require("./controller/authController");
const authRouter = require("./router/authRouter");
const employeeRouter = require("./router/employeeRouter");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter); // All routes with '/api/auth' will be redirected to authRouter
app.use(protectRoute); // Middleware for protecting access to apis which require the user to be logged in
app.use("/api/employee", employeeRouter); // All routes with '/api/employee' will be redirected to employeehRouter

let port = process.env.PORT;
if (port == null || port == "") {
    port = 5000;
}
app.listen(port, function () {
    console.log("Server started successfully at port: " + port);
});

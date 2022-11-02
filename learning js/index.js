const express = require("express");
const cors = require("cors");
const fs = require("fs");
var path = require("path");
// require("dotenv").config();

const app = express();
// const BASE_URL = 'app url goes here';

app.engine('html', require('ejs').renderFile);

app.use(cors());
app.use("/public", express.static(process.cwd() + "/public"));

app.get("/", function(req, res) {
    res.sendFile(process.cwd() + "/public/index.html");
});

// let date = Date.now();

app.listen(3000, function() {
    console.log("app is listening on port 3000");
});
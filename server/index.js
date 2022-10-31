const express = require("express");
const cors = require("cors");
const fs = require("fs");
var path = require("path");
const mongoose = require('mongoose')
const dotenv = require("dotenv")
require('dotenv').config();
// require("dotenv").config();

const Floor = require("./models/Floor")

const app = express();
// const BASE_URL = 'app url goes here';

app.engine('html', require('ejs').renderFile);

app.use(cors());
app.use("/public", express.static(process.cwd() + "/public"));

mongoose.connect(process.env.MONGODB_URI)
    .then(res =>{
        console.log("connected to db")
    }) 
//console.log(process.env.MONGODB_URI);

app.get("/", function(req, res) {
    res.status(200).json("connected")
});


app.post("/floor", async(req, res)=>{
    const newFloor = new Floor(req.body)
    try{
        const savedFloor = await newFloor.save()
        res.status(200).json(savedFloor)
    } catch (err) {
        res.status(500).json(err)
    }
})

// let date = Date.now();

app.listen(3001, function() {
    console.log("app is listening on port 3001");
});
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + "/../client"));

const data = require('./data');
const path = require("path");


function getRandomWebsite(arr) {
    let randomWebsite = Math.floor(Math.random() * arr.length);
    
    return arr[randomWebsite];
  }
  
app.get("/", (req, res) =>{
    res.sendFile(path.resolve("../client/index.html"))
})

app.get('/websites', (req, res) => {
    res.status(200).send(data);
})

app.get('/websites/random', (req, res) => {
    const randomWebsite = getRandomWebsite(data);
    res.status(200).send(randomWebsite);
})

module.exports = app;

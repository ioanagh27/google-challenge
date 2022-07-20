const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const data = require('./data');


function getRandomWebsite(arr) {
    let randomWebsite = Math.floor(Math.random() * arr.length);
    return arr[randomWebsite];
  }

app.get("/", (req, res) =>{
    res.status(200).send('Welcome to our fake Google site!')
})

app.get('/websites', (req, res) => {
    res.status(200).send(data);
})

app.get('/websites/random', (req, res) => {
    const randomWebsite = getRandomWebsite(data);
    res.status(200).send(randomWebsite);
})

module.exports = app;

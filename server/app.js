const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const data = require('./data');


console.log(data)

app.get("/", (req, res) =>{
    res.status(200).send('Welcome to our fake Google site!')
})

app.get('/websites', (req, res) => {
    let websites = data;
    res.json({
        websites: websites.map(w =>w['website'])
    })
})


module.exports = app;

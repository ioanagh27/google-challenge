const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const data = require("./websites")
app.use(express.json());


// app.get("./", (req, res) =>{
//     res.status(200).send("asdf")
// })


module.exports = app;

const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname, "public", "pageOne.html"))
});

app.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname, "public", "pageTwo.html"))
});

app.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname, "public", "error.html"))
});

app.listen(PORT, function(){
    console.log("listening on port " + PORT)
});
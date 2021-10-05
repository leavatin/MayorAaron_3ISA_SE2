const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;
let name = "Juan"
let name2 = "Pedro"

app.get("/", (req, res) =>{
    res.send(`<h1>Hello Juan ${name}<h1>`);
});

app.get("/", (req, res) =>{
    res.send(`<h1>Hello Pedro ${name2}<h1>`);
});

app.listen(PORT, function(){
    console.log("listening on port " + PORT)
});
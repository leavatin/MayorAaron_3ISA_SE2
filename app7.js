const express = require ('express');
const mysql2 = require ('mysql2');

const PORT = process.env.PORT || 3000;
const app = express();

const con = mysql2.createConnection({
    host : "localhost",
    port : 3306,
    user: "root",
    password: "nfrx705X",
    database: "school",
});

con.connect((err) => {
    if(!err){
        console.log("connected to mySQL server at port 3306");
    }
});

app.get("/create-covid", (req,res) => {
    let sql2 = "CREATE DATABASE CovidDb";
    con.query(sql2, (err, result) => {
        if(!err){
            res.send("Suecessfully created the database...");
        }else{
            throw err;
            res.send("failed to create the database...");
        }
    })
});

app.get("/create-covid-table", (req,res) => {
    let sql2 = "CREATE TABLE stat(locationid int AUTO_INCREMENT,  cases int, death int,PRIMARY KEY(locationid))";
    con.query(sql2, (err, result) => {
        if(!err){
            res.send(result);
        }else{
            
            res.send("failed to create student table...");
        }
    })
});

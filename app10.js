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
    let sql2 = "CREATE TABLE stat(locationid int AUTO_INCREMENT, location string,  cases int, death int,PRIMARY KEY(locationid))";
    con.query(sql2, (err, result) => {
        if(!err){
            res.send(result);
        }else{
            
            res.send("failed to create student table...");
        }
    })
});

app.get("/insert-covid", (req,res) => {
    let newRow = {cases: 20, deaths: 20};
    let sql2 = "INSERT INTO CovidDb SET ?";
    con.query(sql2, newRow, (err, result) => {
        if(!err){
            res.send(result);
        }else{
            throw err
            res.send("failed to insert in to student table...");
        }
    });
});

app.get("/read-covid", (req,res) => {
    let sql2 = "SELECT * FROM CovidDb";
    con.query(sql2, (err, result) => {
        if(!err){
            res.send(result);
        }else{
            throw err
            res.send("failed to read student table...");
        }
    });
});

app.get("/update-covid", (req,res) => {
    let sql2 = "UPDATE CovidDb SET cases=5000, location='Metro Manila', deaths=6000 WHERE id=1";
    con.query(sql2, (err, result) => {
        if(!err){
            res.send(result);
        }else{
            throw err
            res.send("failed to update student table");
        }
    });
});

app.get("/delete-covid", (req,res) => {
    let sql2 = "DELETE FROM CovidDb WHERE id=1";
    con.query(sql2, (err, result) => {
        if(!err){
            res.send(result);
        }else{
            throw err
            res.send("failed to update student table");
        }
    });
});

app.get("/call-student2", (req,res) => {
    let sql2 = "CALL DisplayStudent()";
    con.query(sql2, (err, result) => {
        if(!err){
            res.send(result);
        }else{
            throw err
            res.send("failed to call DisplayStudent() pocedure");
        }
    });
});



app.get("/call-covid2", (req,res) => {
    let sql2 = "CALL CovidNew()";
    con.query(sql2, (err, result) => {
        if(!err){
            res.send(result);
        }else{
            throw err
            res.send("failed to call DisplayStudent() pocedure");
        }
    });
});
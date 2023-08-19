// const express = require("express");
import express from "express";
import dotenv from "dotenv";



const app = express();
dotenv.config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
    let data = {
        "name": "nisha"
    };
    res.json(data);
});
app.post("/get-data",function(req,res){
    let data={
        "status":"done"
    }
    res.json(data)
})
app.listen(process.env.PORT, function () {
    console.log("app running", process.env.PORT);
});

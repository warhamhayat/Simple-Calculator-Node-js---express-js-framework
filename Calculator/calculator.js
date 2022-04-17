//jshint esversion:6

const express = require("express");
const bodyParse = require ("body-parser");
const bodyParser = require("body-parser");

const web = express();

web.use (bodyParser.urlencoded({extended:true }));

//Home Calculator
web.get("/", function(req,res){
    res.sendFile(__dirname +"/src/index.html")
});

web.post("/", function(req,res) {
    let colm1 =Number (req.body.colm1);
    let colm2 =Number (req.body.colm2);

    let result = colm1 + colm2;

    res.send("Hasil penjumlahannya adalah :" + result)
});


web.get("/Bmicalculator", function(req,res){
    res.sendFile(__dirname +"/src/bmiCalculator.html")
});

//BMI Calculator

web.post("/Bmicalculator", function(req,res) {
    let colm1 =parseFloat (req.body.weight);
    let colm2 =parseFloat (req.body.height);

    let result = colm1 /(colm2 * colm2);

    res.send("Hasil BMI-nya adalah :" + result)
});


web.listen(8080, function(){
    console.log("server sedang berjalan di HTTP")    
});

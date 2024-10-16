const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const session = require("express-session");
const ejs = require("ejs");
const cors = require("cors");

const app = express();

const corsOptions = {
    origin:["http://localhost:5173"]
};

app.use(cors(corsOptions));
const port =  3000;

// app.use(express.static())
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.get("/",(req , res)=>{
    // res.render("home",{seeServer: "server fuck live data"});
    res.json({fruits:["apple","mango","pineapple"]});
});
app.listen(port,()=>{
    console.log(`server is running on ${port}`);
});
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const session = require("express-session");
const ejs = require("ejs");
const cors = require("cors");
const corsOptions = {
    origin:["http://localhost:5173/"]
};

const app = express();
const port =  3000;
// app.use(express.static())
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.get("/",(req , res)=>{
    res.render("home",{seeServer: "server fuck live data"});
});
app.listen(port,()=>{
    console.log(`server is running on ${port}`);
});
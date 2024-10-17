const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const ejs = require("ejs");

const corsOptions = {
    origin: ["http://localhost:5173"]
  };

const port = 3000;
const app = express();
app.use(cors(corsOptions));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.static(__dirname + '/public'));


mongoose.connect("mongodb://127.0.0.1:27017/wikiDB")
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));

const articleSchema = new mongoose.Schema({
    title:String,
    content:String
  });
  const Article = new mongoose.model("Article", articleSchema);


  app.get("/",(req,res)=>{
    res.render("home");
  });

  app.route("/articles")
  .post((req, res)=>{
    const {title,content} = req.body;
    console.log(req.body);
    const article = new Article({
        title:title,
        content:content
      }); 
  article.save()
  .then(() => console.log('article saved successfully'))
  .catch(err => console.error('Error saving article', err));
    res.render("articles",{articleName:title,article:content});
  })
  .get((req,res)=>{
    Article.find()
    .then((article)=>{
      console.log(article)
      res.render("articles",{articleName:title,article:content});
    })
    .catch((err) => {
      console.error(err);
      res.render("articles",{articleName:"",article:""});
    });
  })
  .delete((req,res)=>{
    Article.deleteMany({title:""},(err)=>{});
  });

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
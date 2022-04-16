const express = require ("express");
const app = express();
const path = require ("path");

app.use(express.static("public"));

app.set ("view engine", "ejs");

app.get ("/", (req, res)=>{
    res.render("index");
});
app.get ("/creation", (req, res)=>{
    res.render("creation");
});
app.get ("/default", (req, res)=>{
    res.render("default");
});
app.get ("/personnageCree", (req, res)=>{
    res.render("personnageCree");
});

const port = 4000
app.listen(port, () => console.log("APP Démmaré sur le port  " + port));
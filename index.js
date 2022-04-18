const express = require ("express");
const app = express();
const path = require ("path");

app.use(express.static("public"));

app.set ("view engine", "ejs");

app.get ("/", (req, res)=>{
    res.render("index", {title : "Accueil"});
});
app.get ("/creation", (req, res)=>{
    res.render("creation", {title : "Création"});
});
app.get ("/default", (req, res)=>{
    res.render("default", {title : "Défaut"});
});
app.get ("/personnageCree", (req, res)=>{
    res.render("personnageCree", {title : "Personnage Créé"});
});
app.get ("/test", (req, res)=>{
    res.render("test", {title : "Personnage Créé"});
});

const port = 4000
app.listen(port, () => console.log("APP Démmaré sur le port  " + port));
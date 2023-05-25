// express
const express = require("express");
const app = express();
//connexion à .env
require("dotenv").config({path: "./.env"});

//connexion db
require("./config/database");

//json parsing
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/", require("./routes/post.route"));

app.listen(process.env.PORT, ()=>{
    console.log(`serveur est sur le port ${process.env.PORT}`)
})
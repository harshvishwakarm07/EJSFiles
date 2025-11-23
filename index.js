const express = require("express");
const path = require("path");
const app = express();

let port = 8080;
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.listen(port,()=>{
    console.log(`Server is Runnig on port No : ${port}`);
})

app.get("/",(req,res)=>{
    res.render("home.ejs");
})

app.get("/rolldice",(req,res)=>{
    let diceValue =Math.floor(Math.random()*6)+1;
    res.render("rolldice",{num:diceValue});
})
app.get("/ig/:username",(req,res)=>{
    let {username} = req.params;
    const instaData = require("./data.json");
    let data =  instaData[username];
    console.log(data);
    res.render("instagram.ejs",{data});
})
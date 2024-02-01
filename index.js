const express = require("express");

const app = express();
const path = require("path");
const port = 8080;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  //res.send("This is home");
  res.render("home.ejs");
});
app.get("/hello", (req, res) => {
  res.send("This is hello page");
  //res.render("home.ejs");
});

app.get("/rolldice",(req,res)=>{
  let diceValue = Math.floor(Math.random()*6 +1);
  res.render("rolldice.ejs", {num: diceValue});
});

// app.get("/instagram/:username", (req,res) => {
//   let followers = ["Vinay", "Shradha", "Vishnu", "Shubham"];
//   const {username} = req.params;
//   res.render("instagram.ejs",{username, followers});
// })

app.get("/instagram/:username", (req,res) =>{
  const instaData = require("./data.json");
  console.log(instaData);
  

});

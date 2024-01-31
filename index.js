const express = require("express");
const app  = express();

//console.dir(app);
let port = 8080;
app.listen(port,() => {
  console.log(`app is listening at port ${port}`);


  
// app.use((req, res) => {
//  // console.log(req);
//  console.log("request recieved");
// // res.send("this is a basic response.");
// // res.send({
// //  fruit: "Banana",
// //  color: "Yellow",
// //  variety: "hybrid",
// // })

// res.send("<h1>Fruits</h1><ul><li>Banana</li><li>Apple</li></ul>")
// });
  app.get("/",(req, res) => {
   res.send("You contacted root path");
  });
// app.get("/banana",(req, res) => {
//   res.send("You contacted banana path");
// });
// app.get("/apple",(req, res) => {
//   res.send("You contacted apple fruit path");
// });
// app.get("*",(req, res) => {
//   res.send("This path does not exist")
// });

app.post("/", (req, res) => {
  res.send("you sent a post request to root");
});

app.get("/:username/:id", (req, res) => {
  console.log(req.params);
  let {username, id} = req.params;
  let htmlStr = `<h2>Welcome to the page of @${username}</h2>`
  res.send(htmlStr);
});

app.get("/search", (req,res) => {
  let {q} = req.query;
  if(!q){
    res.send("nothing searched");
  }
  res.send(`<h1>search results for query: ${q}</h1>`);
});
});

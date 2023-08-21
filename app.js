const express=require("express");
const bodyParser=require("body-parser");
const date= require(__dirname + "/date.js");


const app= express();
app.set('view engine', 'ejs') 

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"));

let items=[];
const workItems=[];

app.get("/", function(req, res){
    let day= date()
    res.render('List', {kindOfThings:day , postItems:items});
});

app.post("/",function(req, res){
  let item=req.body.newItem;
  if(req.body.button==="Work"){
    workItems.push(item)
    res.redirect("/work")
  }else{
    items.push(item);
    res.redirect("/");
  }
})

app.get("/work", function(req,res){
res.render("list",{kindOfThings: "Work", postItems:workItems} );
})


app.get("/about", function(req,res){
  res.render(`${__dirname}/views/about.ejs`)
})


app.listen(3000, function(){
    console.log("Server started on port 3000");
})

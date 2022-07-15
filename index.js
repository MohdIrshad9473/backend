require('dotenv').config();
const express = require("express");
const cors = require("cors");
require("./db/config");
const date = require("./db/Festival"); 
const Festival = require("./db/Festival");
const Login = require("./db/Login");
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());

app.post("/", async(req,res)=>{
    try{
        console.log(req.body);
        let user = await Login.findOne(req.body).select("-password");
        console.log(user);
        if(!user){
            res.send({"error":"your email password is not match"});
            
        }
        else{
        res.send(user);
        
        }
        
    }
    catch(e){
        console.log(e);
    }
})

app.post("/enter_festival",async(req ,res)=>{
    try{
        var festival_date = new Festival(req.body);
        var  result = await festival_date.save().then(t=>{
            res.send(t);
        })
        res.send(result);
    }
    catch(e) {
        console.log(e);
    }
})

app.get("/find_festivsl", async(req, res)=>{
    try{
        Festival.find().then((data)=>res.json(data));
    }
    catch(e){
        console.log(e);
    }
})

app.listen(process.env.PORT);

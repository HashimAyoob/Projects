

import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API = "https:\\secrets-api.appbrewery.com/random";


app.use(express.static("public"));

app.get("/",async (req, res)=>{
    try{
        const result = await axios.get(API);
        console.log(result.data)
        res.render("index.ejs",{secret:result.data.secret,user:result.data.username});
      
    }catch(error){
        console.log(error.response.data);
    }
});

app.listen(port,(req, res)=>{
    console.log("Listening on port:" + port);
});
const express=require('express');
const authroutes =require("./routes/auth.routes")
const cookieparser =require('cookie-parser')
const app=express();
app.use(express.json());
app.use("/api/auth",authroutes)
app.use(cookieparser())





module.exports=app;
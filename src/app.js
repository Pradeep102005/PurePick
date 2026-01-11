const express=require('express');
const app=express();
app.get("/test",(req,res)=>{
    res.send("Vijayibhavaaa");
})
app.get("/hello",(req,res)=>{
    res.send("hi");
})
app.listen(3000,()=>{
    console.log("Server started running succesfully");
});
const express=require('express');
const app=express();
app.use("/test",(req,res)=>{
    res.send("Vijayibhavaaa");
})
app.use("/hello",(req,res)=>{
    res.send("hi");
})
app.listen(3000,()=>{
    console.log("Server started running succesfully");
});
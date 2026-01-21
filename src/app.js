const express=require('express');
const connectDB=require("./config/database");
const app=express();

app.get("/test",(req,res)=>{
    res.send("Vijayibhavaaa");
})
app.get("/hello",(req,res)=>{
    res.send("hi");
})

connectDB()
.then(()=>{
console.log("Database connection estbalised");
app.listen(3000, () => {
    console.log("Server started running 3000");
});
})
.catch(err=>{
console.log("Database cannot be connected");
});
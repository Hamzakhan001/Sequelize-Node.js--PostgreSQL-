const express=require("express");
const app=express();


const port=9090;
require("./models/index");
var userController=require("./controllers/userControllers")


app.listen(port,()=>{
	console.log(`app listening`)
})
const express=require("express");
const app=express();


const port=9090;
require("./models/index");


app.listen(port,()=>{
	console.log(`app listening`)
})
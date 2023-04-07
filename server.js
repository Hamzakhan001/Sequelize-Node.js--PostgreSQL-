const express=require("express");
const app=express();


const port=9090;
require("./models/index");
var userController=require("./controllers/userControllers")


app.get("/add",userController.addUser);
app.get("/crud",userController.crudOperations);
app.get("/query",userController.queryData);



app.listen(port,()=>{
	console.log(`app listening`)
})
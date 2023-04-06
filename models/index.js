const Sequelize=require("sequelize");


const sequelize=new Sequelize("postgres","postgres","admin",{
	host:"localhost",
	dialect:"postgres",
	pool:{max:5,min:0,idle:1000}
});

sequelize.authenticate()
.then(()=>{
	console.log("connected")
})
.catch(err=>{
	console.log("error")
})

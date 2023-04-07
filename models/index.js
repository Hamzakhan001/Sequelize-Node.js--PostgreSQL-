const {Sequelize,DataTypes}=require("sequelize");


const sequelize=new Sequelize("postgres","postgres","admin",{
	host:"localhost",
	dialect:"postgres",
	logging:false,
	pool:{max:5,min:0,idle:1000}
});

sequelize.authenticate()
.then(()=>{
	console.log("connected")
})
.catch(err=>{
	console.log("error")
})

const db={};
db.Sequelize=Sequelize;
db.sequelize=sequelize;

db.users=require("./users")(sequelize,DataTypes);
db.posts=require('./post')(sequelize,DataTypes);
db.sequelize.sync()
.then(()=>{
	console.log("user created ")
})


module.exports=db

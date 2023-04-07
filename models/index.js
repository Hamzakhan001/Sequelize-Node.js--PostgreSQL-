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

 
db.users.hasOne(db.posts,{foreinKey:'user_id'});
db.posts.belongsTo(db.users,{foreinKey:'user_id'});

module.exports=db

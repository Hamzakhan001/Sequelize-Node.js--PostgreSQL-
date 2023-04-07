
const db=require('../models');
const User=db.users;



let addUser=async (req,res)=>{
	//create new user
	// let data=await User.build({name:"hamza",email:"hamza@gmai.com"});

	//it will create and save new user
	let dat=await User.create({})
	data.save();
	resp.status(200).json(resp) 
}

module.exports={addUser}
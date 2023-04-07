module.exports=(sequelize,DataTypes)=>{
	const Post=sequelize.define("posts",{
		name:DataTypes.STRING,
		title:DataTypes.STRING,
		content:DataTypes.STRING,
		user_id:DataTypes.INTEGER
	},{
		createdAt:'create_at',
		updatedAt:'modifed_at'
	})
	return Post
}
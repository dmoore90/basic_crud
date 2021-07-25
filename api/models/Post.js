const Sequelize = require('sequelize');
const connection = require('../db/connection');

const Post = connection.define('Posts', {
	id: {
		type: Sequelize.INTEGER(11),
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
	},
	name: {
		type: Sequelize.STRING(45),
		allowNull: false
	}
})

module.exports = Post;
const Sequelize = require('sequelize');

const connection = new Sequelize('crud', 'user', 'pass', {
	host: 'localhost',
	dialect: 'mysql',
	define: {
		timestamps: false
	}
})

module.exports = connection;
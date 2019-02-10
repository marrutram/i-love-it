
module.exports = {
	port: 3000,
	dbConnectionString: ('development', 'backendiloveit', 'backendiloveit', {
		host: 'localhost',
		dialect: 'postgres',
		operatorsAliases: false,
	   
		pool: {
		  max: 5,
		  min: 0,
		  acquire: 30000,
		  idle: 10000
		},
		define: {
		  underscored: true
		}
	   }),
	saltRounds: 2,
	jwtSecret: 'yo-its-a-secret',
	tokenExpireTime: '6h'
}

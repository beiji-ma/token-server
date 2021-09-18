const mysql = require('mysql')

const connnection = mysql.createConnection({
  host: process.env.DATABASE_HOST || '127.0.0.1',
  port: '3306',
  user: 'root',
  password: '123456',
  database: 'auth'
})


connnection.connect(function (err) {
  //if (err) throw err
  if (err) {
	  console.log(err)
	  throw err
  }
  console.log('connected.')
})

module.exports = connnection

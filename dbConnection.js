const mysql = require('mysql')

const connnection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '123456',
  database: 'auth'
})


connnection.connect(function (err) {
  if (err) throw err
  console.log('connected.')
})

module.exports = connnection
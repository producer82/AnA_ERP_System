const fs = require("fs");
const express = require("express")
const app = express()
const port = process.env.PORT || 5000
const mysql = require("mysql")
const data = fs.readFileSync('./database.json')

const conf = JSON.parse(data);

const connection = mysql.createConnection({
	host: conf.host,
	user: conf.user,
	password: conf.password,
	port: conf.port,
	database: conf.database
})

app.get('/api/customer', (req, res) => {
    connection.query(
		"SELECT * FROM CUSTOMER",
		(err, rows, fields) => {
			if (err) throw err;
			res.send(rows);
		}
	);
})

app.listen(port, (err) => {
    if (err) throw err
    console.log(`Server listening on port ${port}`) 
})
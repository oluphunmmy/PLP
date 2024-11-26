const express = require('express')
const db = require('./database')

//initiatization
const app = express();
//define port
const port = 4500;

//performing CRUD operations
//CREATE
//define routes
app.get('/createTable', (req, res) => {
    const sql =
    `
    CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
    `

    db.query(sql, (err) => {
        if(err){
            console.log('Error creating user table:', err)
            return response.status(500).send('Error creating user table')
        }
    })
})
//defining route
app.get('/', (req, res) => {
    res.send('Welcome to express package')
})
//launch 
app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`)
})
//how to interract with the database
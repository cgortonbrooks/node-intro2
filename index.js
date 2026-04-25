const express = require('express')
const mysql = require('mysql2')
const app = express()
const PORT = 3000

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

const db = mysql.createConnection({
    host: '66.198.240.46',
    user: 'bfzhiwes_node-intro-user',
    password: 'node-intro-user-password',
    database: 'bfzhiwes_node-intro'
})

app.get('/students', (req, res) => {
    let sql = 'select * from students'
    db.query(sql, (err, results) => {
        if (err) return res.status(500).send(err)
        res.json(results)
    })
})

app.get('/', (req, res) => {
    res.send('<h1>Hello Mr Gorton</h1>')
})

app.get('/bye', (req, res) => {
    res.send('Buh bye')
})

app.post('/add-student', (req, res) => {
    let {name, grade} = req.body
    db.query(`INSERT INTO students (name, grade) values ("${name}", ${grade})`, 
        (err, results) => {
            if (err) return res.status(500).send(err)
            res.redirect('/students')
        }
    )
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})
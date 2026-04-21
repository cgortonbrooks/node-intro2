const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    res.send('<h1>Hello Mr Gorton</h1>')
})

app.get('/bye', (req, res) => {
    res.send('Buh bye')
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})
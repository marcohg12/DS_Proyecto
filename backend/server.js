const express = require('express')

const app = express()
const port = 5000

app.get('/', async (req, res) => {
    res.send("HOLA MUNDO")
})

app.listen(port)
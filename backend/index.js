const express = require('express')
const path = require('path')


const port = 5000
const app = express()

app.use('/public', express.static(path.join(__dirname, '../website/public')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../website/index.html'))
})
app.get('/planet/:repo', (req, res) => {
    res.sendFile(path.join(__dirname, '../website/space_entities.html'))
})
app.get('/star/:repo', (req, res) => {
    res.sendFile(path.join(__dirname, '../website/space_entities.html'))
})

app.listen(port, () => {
    console.log(`Akashalay server is listening on http://127.0.0.1:${port}`)
})
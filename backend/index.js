const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const db = require("./db")


const port = 5000
const app = express()
db.connectDB();
app.use('/public', express.static(path.join(__dirname, '../website/public')))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
  


//handling get requests for web pages
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../website/index.html'))
})
app.get('/planet/', (req, res) => {
    res.sendFile(path.join(__dirname, '../website/space_entities.html'))
})
app.get('/star/', (req, res) => {
    res.sendFile(path.join(__dirname, '../website/space_entities.html'))
})

//handling get requests for data
app.get('/get-planet-desc', async(req, res) => {
    const planetName = req.header("planetName")
    const data = await db.findPlanetData(planetName)
    res.json(data)
})

//handling post requests
app.post("/saveDesc", async(req, res) => {
    const {name, shortDesc, fullDesc} = req.body
    const desc = {name, shortDesc, fullDesc}
    const data = await db.savePlanetDesc(desc)
    res.json(data)
})

app.listen(port, () => {
    console.log(`Akashalay server is listening on http://127.0.0.1:${port}`)
})
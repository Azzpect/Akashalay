const mongoose = require('mongoose');

const descSchema = {
    Name: String,
    ShortDesc: String,
    FullDesc: String
}
const planetDesc = mongoose.model("PlanetDesc", descSchema);




async function connectDB (){
    await mongoose.connect("mongodb://127.0.0.1:27017/Akashalay");
    console.log("Connected to Akashalay Database...");
}

async function savePlanetDesc(desc) {
    const {name, shortDesc, fullDesc} = desc
    const planet = new planetDesc({Name: name, ShortDesc: shortDesc, FullDesc: fullDesc});
    const planetData = await planet.save();
    return planetData
}

async function findPlanetData(name) {
    const planetData = await planetDesc.findOne({Name: name});
    return planetData
}


module.exports = {connectDB, savePlanetDesc, findPlanetData};

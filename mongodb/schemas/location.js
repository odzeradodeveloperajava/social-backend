const mongoose = require('mongoose')


const locationSchema = new mongoose.Schema({
    name: String,
})

module.exports = mongoose.model("locations", locationSchema)
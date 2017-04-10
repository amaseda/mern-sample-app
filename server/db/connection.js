const mongoose = require("mongoose")
const Schema = mongoose.Schema

mongoose.connect("mongodb://localhost/mern-practice")

const CitySchema = new Schema({
  name: String,
  population: Number
})

const City = mongoose.model("City", CitySchema)

module.exports = mongoose

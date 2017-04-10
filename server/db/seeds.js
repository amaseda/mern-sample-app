const mongoose = require("./connection.js")

const City = mongoose.model("City")

const cities = [
  {name: 'New York City', population: 8175133},
  {name: 'Los Angeles',   population: 3792621},
  {name: 'Chicago',       population: 2695598}
]

City.remove({}).then(() => {
  City.collection.insert(cities).then(citiesData => {
    console.log(citiesData)
    process.exit()
  })
})

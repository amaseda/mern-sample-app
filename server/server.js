import bodyParser from "body-parser"
import express from "express"
import mongoose from "./db/connection.js"
import path from "path"

// express config
const app = express()
const router = express.Router()

// mongoose config
const City = mongoose.model("City")

// static files
const staticFiles = express.static(path.join(__dirname, "../../client/build"))
app.use(staticFiles)

// body-parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


router.get("/cities", (req, res) => {
  City.find({}).then(cities => {
    res.json(cities)
  })
})

app.use(router)

// ???
app.use("/*", staticFiles)

app.set("port", process.env.PORT || 3001)
app.listen(app.get("port"), () => {
  console.log(`Listening on ${app.get("port")}`)
})

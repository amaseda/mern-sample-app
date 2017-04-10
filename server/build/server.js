"use strict";

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _connection = require("./db/connection.js");

var _connection2 = _interopRequireDefault(_connection);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// express config
var app = (0, _express2.default)();
var router = _express2.default.Router();

// mongoose config
var City = _connection2.default.model("City");

// static files
var staticFiles = _express2.default.static(_path2.default.join(__dirname, "../../client/build"));
app.use(staticFiles);

// body-parser
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));

router.get("/cities", function (req, res) {
  City.find({}).then(function (cities) {
    res.json(cities);
  });
});

app.use(router);

// ???
app.use("/*", staticFiles);

app.set("port", process.env.PORT || 3001);
app.listen(app.get("port"), function () {
  console.log("Listening on " + app.get("port"));
});
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const timerouteRoutes = express.Router();
const PORT = 4000;

let Timeroute = require("./timeroute.model");

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/timeroutes", {
  useNewUrlParser: true
});
const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});

timerouteRoutes.route("/").get(function(req, res) {
  Timeroute.find(function(err, timeroutes) {
    if (err) {
      console.log(err);
    } else {
      res.json(timeroutes);
    }
  });
});

timerouteRoutes.route("/:id").get(function(req, res) {
  let id = req.params.id;
  Timeroute.findById(id, function(err, timeroute) {
    res.json(timeroute);
  });
});

timerouteRoutes.route("/add").post(function(req, res) {
  let timeroute = new Timeroute(req.body);
  timeroute
    .save()
    .then(timeroute => {
      res.status(200).json({ timeroute: "Timeroute added successfully" });
    })
    .catch(err => {
      res.status(400).send("Adding new timeroute failed");
    });
});

timerouteRoutes.route("/update/:id").post(function(req, res) {
  Timeroute.findById(req.params.id, function(err, timeroute) {
    if (!timeroute) res.status(404).send("data is not found");
    else timeroute.timeroute_title = req.body.timeroute_title;
    timeroute.timeroute_description = req.body.timeroute_description;
    timeroute.timeroute_responsible = req.body.timeroute_responsible;
    timeroute.timeroute_priority = req.body.timeroute_priority;
    timeroute.timeroute_date = req.body.timeroute_date;
    timeroute.timeroute_completed = req.body.timeroute_completed;

    timeroute
      .save()
      .then(timeroute => {
        res.json("Timeroute updated");
      })
      .catch(err => {
        res.status(400).send("Update not possible");
      });
  });
});

app.use("/timeroutes", timerouteRoutes);

app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});

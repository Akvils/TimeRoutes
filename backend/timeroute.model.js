const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Timeroute = new Schema({
  timeroute_title: {
    type: String
  },
  timeroute_description: {
    type: String
  },
  timeroute_responsible: {
    type: String
  },
  timeroute_priority: {
    type: String
  },
  timeroute_date: {
    type: String
  },
  timeroute_completed: {
    type: Boolean
  }
});

module.exports = mongoose.model("Timeroute", Timeroute);

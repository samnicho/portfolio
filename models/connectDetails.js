const mongoose = require("mongoose");

const connectDetailsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  }
});

const ConnectDetails = mongoose.model("connectDetails", connectDetailsSchema);

module.exports = ConnectDetails;

const mongoose = require("mongoose");

const Folio = mongoose.model("Folio",
  new mongoose.Schema({
  name: { 
    type: String, 
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  polcies: [
    {
      policynum: String,
      insured: Number,
      premium: Number
    },
  ],
}));

module.exports = Folio;

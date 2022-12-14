const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Favourite = new Schema(
  {
    id: { type: String, require: true },
    name: { type: String },
    address: { type: String },
    image: { type: String },
    category: { type: Number },
    userID: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Favourite", Favourite);

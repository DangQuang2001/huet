const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Event = new Schema(
  {
    id: { type: String, require: true, unique: true },
    name: { type: String },
    address: { type: String },
    image: { type: String },
    images: { type: Array },
    description: { type: String },
    begin: { type: Date },
    end: { type: Date },
    price: { type: Number },
    organizationName: { type: String },
    note: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Event", Event);

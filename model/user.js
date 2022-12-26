const { default: mongoose } = require("mongoose");
const mongo = require("mongoose");
const Schema = mongo.Schema;

const User = new Schema(
  {
    name: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
    image: { type: String },
    phone: { type: String },
    isGoogle: { type: Boolean },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", User);

const { default: mongoose } = require("mongoose");
const mongo = require("mongoose");
const { boolean } = require("webidl-conversions");
const Schema = mongo.Schema;

const FoodStore = new Schema(
  {
    id: { type: String, require: true, unique: true },
    name: { type: String, require: true },
    image: { type: String },
    categories: { type: Array, require: true },
    rating: { type: Number },
    ratingCount: { type: Number },
    isOpen: { type: Boolean },
    description: { type: Array },
    menu: { type: Array },
    openTime: { type: String },
    closeTime: { type: String },
    minCost: { type: Number },
    maxCost: { type: Number },
    isDeleted: { type: Boolean },
    address: { type: String },
    latitude: { type: Number },
    longitude: { type: Number },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("FoodStore", FoodStore);

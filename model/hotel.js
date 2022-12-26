const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Hotel = new Schema(
  {
    id: { type: String, require: true, unique: true },
    name: { type: String },
    address: { type: String },
    starRating: { type: Number },
    numReviews: { type: Number },
    accommodationLocation: {
      latitude: { type: String },
      longitude: { type: String },
    },
    hotelFeatures: { type: Array },
    roomType: { type: Array },
    imageUrl: { type: String },
    imageUrls: { type: Array },
    price: { type: Number },
    accomPropertyType: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Hotel", Hotel);

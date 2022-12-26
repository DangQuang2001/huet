const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TouristAttraction = new Schema({
  ID: { type: Number, require: true, unique: true },
  TenDiaDiem: { type: String },
  DiaChi: { type: String },
  MoTa: { type: String },
  MoTaApp: { type: String },
  Lat: { type: Number },
  Long: { type: Number },
  AnhDaiDien: { type: String },
  AnhDinhKem: { type: String },
  CategoryId: { type: Array },
});

module.exports = mongoose.model("TouristAttraction", TouristAttraction);

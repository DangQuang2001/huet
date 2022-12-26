const express = require("express");

const app = express();
const port = process.env.PORT || 8888;
const db = require("./config");
db.connect();

const cors = require("cors");
const Routes = require("./routes");
app.use(express.static("public"));
app.use(express.json());
app.use("/api", cors(), Routes);
app.get("/", (req, res) => res.send("Api hueT!"));

app.listen(port, () => console.log(`Nhấn vào đây => http://localhost:${port}`));

module.exports = app;

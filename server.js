const express = require("express");
const app = express();

//persistent session setup
const session = require("express-session");
app.use(session({ secret: "partyparrot" }));

//passport setup
const passport = require("passport");
app.use(passport.initialize());
app.use(passport.session());

//body-parser setup
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//mongoose setup
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/crwsin",
  err => {
    if (err) throw err;
    console.log("db connected!");
  }
);

//routes
app.use("/", require("./routes"));

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`🌎  ==> DB now listening on PORT ${port}!`);
});

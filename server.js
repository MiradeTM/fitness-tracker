const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

// Express App
const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan("dev"));

// data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// db mongo
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/Workout-Tracker";
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})

// Creating Routes
require("./routes/api.js")(app);
require("./routes/view.js")(app);

// Starts the server to begin listening
app.listen(PORT, function () {
    console.log(`App listening on Port ${PORT}!`);
});
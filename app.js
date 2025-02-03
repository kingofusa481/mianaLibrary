const express = require('express');
const ejs = require("ejs")

const app = express();
const port = 3000;
const path = require("path");

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));

app.get('/', (req, res) => {
    res.render("index");
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});


module.exports = app; //required for vercel
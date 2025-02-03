const express = require('express');
const ejs = require("ejs")

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render("index");
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
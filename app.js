const express = require('express');
const ejs = require("ejs")

const app = express();
const port = 3000;
const path = require("path");

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));

connectDB();

const fetchAllData = async () => {
    const data = await accregModel.find();
    return data;    
}

app.get('/', (req, res) => {
    res.render("index");
});

// books show page
app.get("/books", (req, res)=> {
    res.render('books');
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});


module.exports = app; //required for vercel

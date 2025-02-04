const express = require('express');
const ejs = require("ejs")

const app = express();
const port = 3000;
const path = require("path");
// const connectDB = require("./db/connectdb");




app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));


// app.use(express.json());
// app.use(express.urlencoded({extended: true}));
// app.use(express.static(path.join(__dirname, "./public")));

// app.set("view engine", "ejs");

// connectDB();

// const fetchAllData = async () => {
//     const data = await accregModel.find();
//     return data;    
// }

// app.get('/', (req, res) => {
//     res.render("index");
// });

app.get('/', async(req, res) => {
    
    res.render('Index', {}, (err, html) => {
        if (err) {
            return res.status(500).send(err.message);
        }
        res.render('layout', { title: 'Home', activePage: 'Index', user: {}, body: html });
    });
});


// run code ok data above


// books show page
app.get("/books", (req, res)=> {
    res.render('books');
});


app.get("/user", (req, res)=> {
    res.render('user');
});
app.get("/articlePanel", (req, res)=> {
    res.render('articleP');
});
app.get("/accreg", async (req, res)=> {
    const data =  await fetchAllData();
    const result = data.reverse();
    res.render('accession-register', {result: result});
});

app.post("/addbook", async (req, res)=> {
    const {title, subTitle, statementRes, author, subAuthor, type, accession_number, ddcNo, shelfNo, authorMark, entryDate, price, language, PublishingPlace, PublishingYear,Edition, ISBN, Volume, Pages, Size, Binding, Notes, Source, Subject, Series, BookStatus, Remarks, Contents, Keywords, SuggestedBy, discipline, ShippingCharges } = req.body;
    const bookdata = new accregModel({
        bookTitle: title,
        subTitle,
        statementRes,
        AuthorName: author,
        subAuthor:  subAuthor,
        type: type,
        accessionNo: accession_number,
        ddcNo,
        shelfNo,
        authorMark,
        price: price,
        language,
        PublishingPlace,
        PublishingYear,
        Edition,
        ISBN,
        Volume,
        Pages,
        Size,
        Binding,
        Notes,
        Source,
        Subject,
        Series,
        BookStatus,
        Remarks,
        Contents,
        Notes,
        Keywords,
        SuggestedBy,
        discipline,
        ShippingCharges,
    });
    bookdata.save().then(()=>{
        console.log("Record saved successfully");
    }).catch((err)=>{
        console.log("Error saving record:", err);
    });
    console.log("Submitted this record:", bookdata);
    
    
    res.redirect('/accreg');
});

app.get("/signup", (req, res)=> {
    res.render('signUp');
});


// SIGNUP DATA ROUTE
app.post("/signup", async (req, res)=> {
    const {
        username, 
        email,
        password,
    } = req.body;

    const existingUser = await signupModel.findOne({email: email});
    if (existingUser) {
        res.render('404', {message: "Email already exists"});
    }
    else{
        const signupData= new signupModel(
            {
                username: username,
                email: email,
                password: password,
            }
        )
        signupData.save().then(()=>{
        console.log("Account created successfully"); 
        
        
            }).catch((err)=>{
                console.log("Error creating account:", err);
            });
        res.redirect('/LoginPage');
    }
    

});
app.get("/LoginPage", (req, res)=> {
res.render('Login');
});

app.post("/Login", async (req, res)=> {
    const { email, password } = req.body;
    const user = await signupModel.findOne({ email : email });
    console.log(user)
        console.log(email)
        console.log(password)
    if (user) {
        res.redirect('/');
    } else {
        
        res.redirect('/404');
    }
});

app.get("/404", (req, res)=> {
    res.render('404');
});

app.get("/test2", (req, res)=> {
    
    res.render('test2');
});
app.get("/test3", (req, res)=> {
    
    res.render('test3');
});
app.post("/test4", (req, res)=> {
    const { title, imageurl, content} = req.body;
    console.log(imageurl);
    res.render('test3');
})






// run code ok data below
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});


module.exports = app; //required for vercel

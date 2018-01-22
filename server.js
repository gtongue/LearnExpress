const express = require('express');
const hbs = require('hbs');

const app = express();

//Middleware
app.set('view engine', 'hbs');
app.use(express.static(__dirname + "/public"));

//Routes
app.get("/", (req, res) => {
    // res.send('hello express');
    // res.send({
    //     name: "Hello",
    //     last: "Express"
    // });
    res.render("home.hbs", {
        pageTitle: "Home",
        currentYear: new Date().getFullYear(),
        welcomeMessage: "Hello Express!"
    });
});

app.get("/about", (req, res) => {
    // res.send("This is the about page");
    res.render("about.hbs", {
        pageTitle: "About Page",
        currentYear: new Date().getFullYear()
    });
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
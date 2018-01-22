const express = require('express');
const hbs = require('hbs');

const app = express();

hbs.registerPartials(__dirname+"/views/partials");
app.set('view engine', 'hbs');

//Middleware
app.use(express.static(__dirname + "/public"));



hbs.registerHelper("getCurrentYear", () => {
    return new Date().getFullYear();
});

hbs.registerHelper("screamIt", (text) => {
    return text.toUpperCase();
});
//Routes
app.get("/", (req, res) => {
    // res.send('hello express');
    // res.send({
    //     name: "Hello",
    //     last: "Express"
    // });
    res.render("home.hbs", {
        pageTitle: "Home",
        welcomeMessage: "Hello Express!"
    });
});

app.get("/about", (req, res) => {
    // res.send("This is the about page");
    res.render("about.hbs", {
        pageTitle: "About Page"
    });
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
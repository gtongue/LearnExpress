const express = require('express');

const app = express();

//Middleware
app.use(express.static(__dirname + "/public"));

//Routes
app.get("/", (req, res) => {
    // res.send('hello express');
    res.send({
        name: "Hello",
        last: "Express"
    });
});

app.get("/about", (req, res) => {
    res.send("This is the about page");
});

app.listen(3000);
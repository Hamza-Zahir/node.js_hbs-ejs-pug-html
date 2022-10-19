const express = require("express");
const padyParser = require("body-parser");
const path = require("path");

const app = express();


// ......... pug ..............:

// app.set("view engine", "pug");
// app.set("views", "views");

// .............................


// ......... hbs ..............:

// const handlebars = require('express-handlebars');
// app.engine('hbs', handlebars.engine({ extname: "hbs",
// layoutsDir: "views/layouts" , defaultLayout: 'main-layout',
// }));
// app.set('view engine', 'hbs');
// app.set('views', 'views');

// .............................

// ......... pug ..............:

app.set("view engine", "ejs");
app.set("views", "views");

// .............................


const adminData = require("./router/admin");
const shopRouter = require("./router/shop");

app.use(padyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.router);
app.use(shopRouter);



app.use("/", (req, res, next) => {

           // ...............html ..........:
    // res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
    
     // ...............pug & hbs ..........:
    // res.render("404", {docTitle: "Page Not Found" });

 // ...............pug & hbs ..........:
 res.render("404", {docTitle: "Page Not Found" , path: '' });

});

app.listen(3000);

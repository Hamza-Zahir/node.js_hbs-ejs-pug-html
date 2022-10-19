const express = require("express");

// const path = require("path");

const router = express.Router();

const products = [];

router.get("/add-product", (req, res, next) => {
         // ...............html ..........:
    // res.sendFile(path.join(__dirname, "../", "views", "add-product.html"))

     // ............... pug & ejs..........:
     res.render("add-product", {docTitle: "Add Product", path: "/admin/add-product" });

    // ............... hbs..........:
    // res.render("add-product", {
    //     docTitle: "Add Product",
    //     productCSS: true,
    //     formsCSS: true,
    //     activeAddProduct: true,
    // });

     

});
router.post("/add-product", (req, res, next) => {
    products.push({title: req.body.title});
    res.redirect("/");
});
exports.router = router;
exports.products = products;
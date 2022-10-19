const express = require("express");

const path = require("path");

const router = express.Router();

const adminData = require("./admin")

router.get("/", (req, res, next) => {
    const products = adminData.products;

       // ...............html ..........:
    // res.sendFile(path.join(__dirname, "../", "views", "shop.html"));

    // ............... pug & ejs..........:
    res.render("shop", {prods:products, docTitle: "My Shop", path: "/" });

    // ............... hbs..........:
    // res.render("shop", {
    //     prods:products, 
    //     docTitle: "My Shop",
    //     hasProduct: products.length > 0,
    //     activeShop: true,
    //     productCSS: true,
        
    // });

    

});

module.exports = router;
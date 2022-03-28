const express = require("express");
const multer = require('multer');
const Products = require('../services/addProductService');

const products = new Products();

const router = express.Router();
const upload = multer({
    dest:"src/uploads"
});

router.post('/', upload.single("file"),(request,response)=>{
    products.create(request.body.user, request.body.gender, request.body.product,request.body.description,request.body.price)
        .then(()=>{
            response.send(products);
        })
        .catch(()=>{
            response.send("algo salio mal");
        })
});

module.exports = router;
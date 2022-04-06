const express = require("express");
const multer = require('multer');
const Products = require('../services/addProductService');

const products = new Products();

const router = express.Router();
const upload = multer({
    dest:"src/public/uploads"
});

router.post('/', upload.single("file"),(request,response)=>{
    products.create(request.file,request.body.user, request.body.gender, request.body.product,request.body.description,request.body.price)
        .then(()=>{
            response.send(products);
        })
        .catch(()=>{
            console.log(request.file, request.body.user);
            response.send("algo salio mal");
        })
});

module.exports = router;
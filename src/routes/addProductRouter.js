const express = require("express");
const multer = require('multer');
const path = require("path");
const Products = require('../services/addProductService');


const products = new Products();
const router = express.Router();
/*THE ORIGINAL CODE THAT SAVES THE IMG TO FOLDER UPLOAD*/
// const upload = multer({
//     dest:"src/public/uploads"
// });

/* CHANGES SEEN IN A BLOG ABOUT MULTER https://alejandrojs.wordpress.com/2018/04/15/alojando-imagenes-remotamente-con-cloudinary/*/
var storage = multer.diskStorage({
    dest:function(req,file,cb){
        cb(null,'src/public/uploads')
    }});

var upload = multer({storage:storage,
    fileFilter: function (req,file,cb){
        if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){
            return cb(new Error('Error en el tipo de archivo'));
        }
        cb(null,true);
    }});
/*until here the changes of the BLOG*/


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
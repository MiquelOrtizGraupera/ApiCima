const express = require("express");
const multer = require('multer');
const path = require("path");
const Products = require('../services/addProductService');

const model = require("../BBDD/model");

const products = new Products();
const router = express.Router();
/*THE ORIGINAL CODE THAT SAVES THE IMG TO FOLDER UPLOAD*/
// const upload = multer({
//     dest:"src/public/uploads"
// });

/* CHANGES SEEN IN A BLOG ABOUT MULTER */
const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'src/public/uploads')
    },
    filename: function (req,file,cb){
        cb(null,Date.now() +".jpg")
    }
});

const upload = multer({storage:storage})


router.get('/:id',(req,res)=>{
    let filename = req.params.id;

    model.findOne({'_id': ObjectId(filename)},(err,result)=>{
        if(err) return console.log(err);
        res.contentType('image/jpeg');
        res.send(result.image.buffer)
    })
})


router.post('/', upload.single("file"),(request,response)=>{
        products.create(request.file,request.body.user, request.body.gender, request.body.product,request.body.description,request.body.price)
        .then(()=>{
            response.send(products);
        })
        .catch((err)=>{
            console.error(err);
            response.send(err + "algo salio mal");
        })
});

module.exports = router;
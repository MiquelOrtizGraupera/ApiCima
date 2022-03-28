//Import mainPageServices to use it's logic
const express = require("express");
const multer = require('multer');
const Products = require("../services/manPageServices");

//Instance AllProducts class
const products = new Products();

//Route to module our API logic
const router = express.Router();
const upload = multer({
    dest:"src/uploads/"
})

//Get all man products
router.get('/',(request,  response)=>{
    products.find()
        .then(() =>{
            response.send(products);
        })
        .catch(() =>{
            console.log("WRONG CATCH REQUEST")
        })
});

//Get one man product
router.get('/:id',(request,response)=>{
    products.findOne(request.params.id)
        .then(() =>{
            response.send(products);
        })
        .catch(() =>{
            console.log("Ups algo salio mal!")
        })
});

//Create one man product
/*router.post('/',upload.single("file"),(request,response)=>{
   console.log(request.file);
    products.create(request.body.user,request.body.product, request.body.description,request.body.price, request.file)
        .then(() =>{
            response.json('Creado perfectamente');
        })
        .catch(() =>{
            response.json("Uop! algo salio mal");
        });
});*/

//Update one man product
router.patch('/:id',(request,response)=>{
   products.update(request.params.id,request.body.user, request.body.product, request.body.description, request.body.price)
        .then(()=>{
            response.send(products);
        })
        .catch(() =>{
            response.send("Algo salio mal");
        })
});

//Delete one man product
router.delete('/:id',(request,response)=>{
    products.delete(request.params.id)
        .then(() =>{
            response.json("Elemento borrado perfectamente")
        })
        .catch(e =>{
            response.json("Uop! algo salio mal");
            response.send(e);
        });
});

module.exports = router;
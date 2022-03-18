//Import mainPageServices to use it's logic
const KidsProducts = require('../services/kidsPageServices');
const express = require("express");

//Instance AllProducts class
const product = new KidsProducts();

//Route to module our API logic
const router = express.Router();

//Get all kids products
router.get('/',(request,  response)=>{
    const p = product.find();
    response.send(p);
});

//Get one kids product
router.get('/:id',(request,response)=>{
    const p = product.findOne(request.url.slice(1));
    response.send(p);
});

//Create one kids product
router.post('/',(request,response)=>{
    products.create(request.body.user,request.body.product, request.body.description,request.body.price)
        .then(() =>{
            response.json('Creado perfectamente');
        })
        .catch(() =>{
            response.json("Uop! algo salio mal");
        });
});

//Update one kids product
router.patch('/:id',(request,response)=>{
    products.update(request.url.slice(1),request.body.user, request.body.product, request.body.description, request.body.price)
        .then(()=>{
            response.json("Updated perfecto!")
        })
        .catch(() =>{
            response.json("Uop! algo salio mal!")
        })
});

//Delete one kids product
router.delete('/:id',(request,response)=>{
    products.delete(request.url.slice(1))
        .then(() =>{
            response.json("Elemento borrado perfectamente")
        })
        .catch(() =>{
            response.json("Uops! algo salio mal");
        });
});

module.exports = router;
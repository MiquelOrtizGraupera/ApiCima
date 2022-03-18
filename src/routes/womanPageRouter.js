//Import mainPageServices to use it's logic
const express = require("express");
const WomanProducts = require("../services/womanPageServices");

//Instance AllProducts class
const products = new WomanProducts();

//Route to module our API logic
const router = express.Router();

//Get all woman products
router.get('/',(request,  response)=>{
    const p = products.find();
    response.send(p);
});

//Get one woman product
router.get('/:id',(request,response)=>{
    const p = products.findOne(request.url.slice(1));
    response.send(p);
});

//Create one woman product
router.post('/',(request,response)=>{
    products.create(request.body.user,request.body.product, request.body.description,request.body.price)
        .then(() =>{
            response.json('Creado perfectamente');
        })
        .catch(() =>{
            response.json("Uop! algo salio mal");
        });
});

//Update one woman product
router.patch('/:id',(request,response)=>{
    products.update(request.url.slice(1),request.body.user, request.body.product, request.body.description, request.body.price)
        .then(()=>{
            response.json("Updated perfecto!")
        })
        .catch(() =>{
            response.json("Uop! algo salio mal!")
        })
});

//Delete one woman product
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
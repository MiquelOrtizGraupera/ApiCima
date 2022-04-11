//Import express module
const express = require('express');

//Import mainPageServices to use it's logic
const AllProducts = require('../services/mainPageServices');
const {static} = require("express");

//Instance AllProducts class
const products = new AllProducts();

//Route to module our API logic
const router = express.Router();


//Get all Products
router.get('/',(request, response)=>{
    response.send(static("/public/html/index.html", {index: false}));
   /* products.find()
        .then(() =>{
            response.send(products);
        })
        .catch(e =>{
            request.send(e);
        })*/
});


module.exports = router;

/*   WE DON'T NEED THIS BY THE MOMENT
//Get One Product
router.get('/:id',(request, response)=>{
    //To do...
});

//Post
router.post('/',(request,response)=>{
    //To do...
});

//Update an element of a product
router.patch('/:id',(request,response)=>{
    //To do...
});

//Delete one product
router.delete('/:id',(request,response)=>{
    //To do...
});
*/

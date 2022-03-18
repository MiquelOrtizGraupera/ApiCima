//Import express module
const express = require('express');

//Import mainPageServices to use it's logic
const AllProducts = require('../services/mainPageServices');

//Instance AllProducts class
const products = new AllProducts();

//Route to module our API logic
const router = express.Router();


//Get all Products
router.get('/',(request, response)=>{
    const mP = products.findMan();
    const wP = products.findWoman();
    const kP = products.findKids();

    response.json('Es la pag principal del index.html');
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

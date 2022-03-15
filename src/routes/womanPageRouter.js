//Import mainPageServices to use it's logic
const express = require("express");
const WomanProducts = require("../services/womanPageServices");

//Instance AllProducts class
const p = new WomanProducts();

//Route to module our API logic
const router = express.Router();

//Get all woman products
router.get('/',(request,  response)=>{
    //...To do
});

//Get one woman product
router.get('/:id',(request,response)=>{
    //...To do
});

//Create one woman product
router.post('/',(request,response)=>{
    //..To do
});

//Update one woman product
router.patch('/:id',(request,response)=>{
    //To do...
});

//Delete one woman product
router.delete('/:id',(request,response)=>{
    //To do...
});

module.exports = router;
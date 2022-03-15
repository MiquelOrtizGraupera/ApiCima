//Import mainPageServices to use it's logic
const AllProducts = require('../services/manPageServices');
const express = require("express");
const ManProducts = require("../services/manPageServices");

//Instance AllProducts class
const products = new ManProducts();

//Route to module our API logic
const router = express.Router();

//Get all man products
router.get('/',(request,  response)=>{
    //...To do
    const p = products.find();
    response.send(p);
});

//Get one man product
router.get('/:id',(request,response)=>{
    //...To do
});

//Create one man product
router.post('/',(request,response)=>{
    //..To do
});

//Update one man product
router.patch('/:id',(request,response)=>{
    //To do...
});

//Delete one man product
router.delete('/:id',(request,response)=>{
    //To do...
});

module.exports = router;
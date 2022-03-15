//Import mainPageServices to use it's logic
const KidsProducts = require('../services/kidsPageServices');
const express = require("express");

//Instance AllProducts class
const p = new KidsProducts();

//Route to module our API logic
const router = express.Router();

//Get all kids products
router.get('/',(request,  response)=>{
    //...To do
});

//Get one kids product
router.get('/:id',(request,response)=>{
    //...To do
});

//Create one kids product
router.post('/',(request,response)=>{
    //..To do
});

//Update one kids product
router.patch('/:id',(request,response)=>{
    //To do...
});

//Delete one kids product
router.delete('/:id',(request,response)=>{
    //To do...
});

module.exports = router;
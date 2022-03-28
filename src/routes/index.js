const express = require('express');

const mainPage = require('./mainPageRouter');
const manPage = require('./manPageRouter');
const womanPage = require('./womanPageRouter');
const kidsPage = require('./kidsPageRouter');
const addProductPage = require('./addProductRouter');

function routerApi(app){
    /*Nos permite separar cabeceras, URL, trabajar y separar peticiones*/
    const router = express.Router();

    app.use('/api/v1',router);

    router.use('/mainPage',mainPage);
    router.use('/manPage',manPage);
    router.use('/womanPage',womanPage);
    router.use('/kidsPage',kidsPage);
    router.use('/addProduct',addProductPage)
}

module.exports = routerApi;
const express = require('express');

const mainPage = require('./mainPageRouter');
const manPage = require('./manPageRouter');
const womanPage = require('./womanPageRouter');
const kidsPage = require('./kidsPageRouter');
const addProductPage = require('./addProductRouter');
const addUser = require('./usersLoginRouter');
const loginPage = require('./loginPageRouter');

function routerApi(app){
    /*Nos permite separar cabeceras, URL, trabajar y separar peticiones*/
    const router = express.Router();

    app.use('/api/v1/static/html',router);

    router.use('/mainPage',mainPage);
    router.use('/manPage',manPage);
    router.use('/womanPage',womanPage);
    router.use('/kidsPage',kidsPage);
    router.use('/addProduct',addProductPage);
    router.use('/addUser',addUser);
    router.use('/logIn',loginPage)
}

module.exports = routerApi;
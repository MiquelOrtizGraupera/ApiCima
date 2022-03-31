const express = require('express');
const router = express.Router();
const Login = require("../services/loginPageService");

const log = new Login();

router.get('/',(request,response)=>{
    log.findOne(request.body.username,request.body.password)
        .then((isValid)=>{
           if(isValid){
               response.send(log);
           }else {
               response.send("Error");
           }
        })
        .catch(() =>{
            response.send("Error");
        })
})

module.exports = router;
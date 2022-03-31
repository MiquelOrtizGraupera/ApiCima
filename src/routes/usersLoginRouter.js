const express = require('express');
const router = express.Router();
const Users = require("../services/usersLoginService");

const user = new Users();

router.get('/',(request ,response)=>{
    user.find()
        .then(()=>{
            response.send(user);
        })
        .catch(() =>{
            response.send("Error!")
        })
});

router.get('/:id',(request, response)=>{

});

router.post('/',(request,response)=>{
    user.create(request.body.username, request.body.email,request.body.password)
        .then(()=>{
            response.send("Creado Perfectamente");
            response.send(user);
        })
        .catch(()=>{
            response.headers;
        })
})

module.exports = router;
const express = require('express');
const bodyParser = require('body-parser');
const routerApi = require('./routes');

const port = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());
app.use(express.json());

/*SERVIR ESTÁTICOS! HTML CSS*/
app.use('/app', express.static('src/public'));


/*root PAGE*/
app.get('/',(request, response)=>{
    console.log(request.headers);
    response.header({
        "custom-header":"Nuestro valor personalizado",
    });
    console.log(request.body);
    response.send('Esta seria la pag. Principal o LOGIN, apartir de aqui empieza la navegación');
});

/*LOG PUERTO*/
app.listen(port,()=>{
    console.log('Mi puerto es: '+ port);
});

routerApi(app);

module.exports = port;
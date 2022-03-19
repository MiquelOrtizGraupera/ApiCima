const express = require('express');
const bodyParser = require('body-parser');
const routerApi = require('./routes');

const app = express();
app.use(bodyParser.json());
const port = 3000;

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

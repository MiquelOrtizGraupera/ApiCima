const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routerApi = require('./routes');

const port = process.env.PORT || 3000;
const coroptions = {
    origin:'http://localhost:3000',
    optionsSuccessStatus: 200
}

const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static('uploads'));
app.use(cors(coroptions));

/*SERVIR ESTÁTICOS! HTML CSS*/
app.use('/api/v1/static', express.static('src/public'));


/*root PAGE*/
app.get('/',cors(),(request, response)=>{
    response.send('Esta seria la pag. Principal o LOGIN, apartir de aqui empieza la navegación');
});

/*LOG PUERTO*/
app.listen(port,()=>{
    console.log('Mi puerto es: '+ port);
});

routerApi(app);

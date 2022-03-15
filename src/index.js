const express = require('express');
const routerApi = require('./routes')

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/',(request, response)=>{
    response.send('Esta seria la pag. Principal o LOGIN, apartir de aqui empieza la navegación');
});

app.listen(port,()=>{
    console.log('Mi puerto es: '+ port);
});

routerApi(app);
/*OJO*/
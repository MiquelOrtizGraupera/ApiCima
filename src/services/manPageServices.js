const Model = require("../BBDD/model");
const bodyParser = require('body-parser');

class ManProducts{
    constructor() {
        this.manProducts = [];
    }

    create(user, product, description, price){
        return new Promise((resolve, reject)=>{
            if(user === null || product === null || price === null){
                return reject("Faltan datos, único no obligatorio és descripción");
            }
            const id = this.manProducts.length + 1
            const fullInfo = {
                id: id,
                user: user,
                product: product,
                description: description,
                price: price
            }

            resolve( this.manProducts.push(fullInfo));
            const myProduct = new Model(fullInfo);
            myProduct.save();
        });
    }

    async find(){
        const respuesta = await Model.find();
       // console.log(respuesta);
        return respuesta;
       /* const fullInfo = {
            _id: String,
            user: String,
            products: String,
            description:String,
            price:Number
        }

       const products =  await Model.find();
        this.manProducts = products;

        for (let i = 0; i < this.manProducts.length ; i++) {
            console.log(this.manProducts[i]);
            console.log("Round "+ i);

        }
       //bodyParser.json(products);
        return this.manProducts.json*/
    }
   async findOne(id){
        let lista = await Model.find();
        for (let i = 0; i < lista.length ; i++) {
            if(lista[i].id.toString() === id){
                console.log(lista[i]);
            }
        }
    }

    update(id, changeUser, changeProduct, changeDescription, changePrice){
       return new Promise(((resolve, reject) => {
           let lista  = Model.find();
           if(lista == null){
               reject("Ups algo salio mal!")
           }
           for (let i = 0; i < lista.length; i++) {
               if(lista[i].id.toString() === id){
                   const info ={
                       id: lista[i].id,
                       user: changeUser,
                       product: changeProduct,
                       description: changeDescription,
                       price: changePrice
                   }
                   lista[i] = info;
                   resolve('Changes has been done! '+info) ;
               }
               const myProduct = new Model(lista);
               myProduct.save();
           }
       }))

    }

    delete(id){
        return new Promise((resolve, reject) => {
            let lista = this.manProducts;
            for (let i = 0; i < lista.length ; i++) {
                if(lista[i].id.toString() === id){
                    this.manProducts.splice(lista[i].id);
                    break;
                }
            }
            resolve('Elimination perfectamente');
        });

    }
}

module.exports = ManProducts;
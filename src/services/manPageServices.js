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
       const products =  await Model.find();
        this.manProducts = products;

        return this.manProducts;
    }
   async findOne(id){
        let lista = await Model.find();
        this.manProducts = lista;
        console.log(this.manProducts.length);
       const uno = this.manProducts[id-1];
        console.log(uno.user);
        return uno;
        }


    async update(id, changeUser, changeProduct, changeDescription, changePrice){
        const lista = await Model.find();
        lista[id-1].user = changeUser;
        lista[id-1].product = changeProduct;
        lista[id-1].description = changeDescription;
        lista[id-1].price = changePrice;
        console.log(lista[id-1].user)
        console.log(lista);
        return lista;

     /* return new Promise(((resolve, reject) => {
           let lista  = resolve(Model.find());
           console.log(lista);
           if(lista == null){
               reject("Ups algo salio mal!")
           }
           for (let i = 0; i < lista.length; i++) {
               console.log(lista[i]);
               if(lista[i-1].id === id){
                   const info ={
                       id: lista[i+1].id,
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
       }))*/

    }

   async delete(id){
       const lista = await Model.find();

       console.log(lista[id-1]);
       lista.splice(lista[id-1]);
       lista.save();
        /* return new Promise((resolve, reject) => {
            let lista = this.manProducts;
            for (let i = 0; i < lista.length ; i++) {
                if(lista[i].id === id){
                    console.log(this.manProducts.splice(lista[i]))
                    this.manProducts.splice(lista[i]);
                }
            }

            resolve.save(lista);
        });*/
    }
}

module.exports = ManProducts;
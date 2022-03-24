const Model = require("../BBDD/model");

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
        this.manProducts = await Model.find();
        //console.log(this.manProducts);
        return this.manProducts;
    }

   async findOne(id){
        this.manProducts = await Model.find();
        console.log(id)

       for (let i = 0; i < this.manProducts.length ; i++) {
           if (this.manProducts[i].id === parseInt(id)) {
               //console.log(this.manProducts[i]);
               this.manProducts = this.manProducts[i];
               return this.manProducts;
           }
       }

    }


    async update(id, changeUser, changeProduct, changeDescription, changePrice){
        let lista = await Model.find();
        lista[id-1].user = changeUser;
        lista[id-1].product = changeProduct;
        lista[id-1].description = changeDescription;
        lista[id-1].price = changePrice;

        this.manProducts = lista;

        console.log(this.manProducts);

        return this.manProducts;

        // return new Promise((resolve, reject) => {
        //     let lista =   Model.find();
        //     // if(!changeUser || !changeProduct|| !changeDescription ||!changePrice){
        //     //   reject("Ups algo salio mal!")
        //     // }
        //     console.log(lista);
        //     for (let i = 0; i < lista.length; i++) {
        //         console.log(lista[i]);
        //         if (lista[i - 1].id === id) {
        //             const info = {
        //                 id: lista[i + 1].id,
        //                 user: changeUser,
        //                 product: changeProduct,
        //                 description: changeDescription,
        //                 price: changePrice
        //             }
        //             lista[i] = info;
        //             resolve('Changes has been done! ' + info);
        //         }
        //         const myProduct = new Model(lista);
        //         myProduct.save();
        //     }
        // })

    }

   async delete(id){
     await Model.deleteOne({id: id});

    }
}

module.exports = ManProducts;
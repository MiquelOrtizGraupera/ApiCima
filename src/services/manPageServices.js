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
        return this.manProducts;
    }

   async findOne(id){
        this.manProducts = await Model.find();

       for (let i = 0; i < this.manProducts.length ; i++) {
           if (this.manProducts[i].id === parseInt(id)) {
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

        const myProduct = new Model(this.manProducts[id-1]);
        await myProduct.save()

        return this.manProducts;
    }

   async delete(id){
     await Model.deleteOne({id: id});

    }
}

module.exports = ManProducts;
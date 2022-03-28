const Model = require("../BBDD/model");

class WomanProducts{
    constructor() {
        this.womanProducts = [];
    }

  /*  create(user, product,gender, description, price){
        return new Promise((resolve, reject)=>{
            if(user === null || product === null ||price === null){
                return reject("Faltan datos, único no obligatorio és descripción");
            }
            const id = this.womanProducts.length + 1
            const fullInfo = {
                id : id,
                user: user,
                gender: gender,
                product: product,
                description: description,
                price: price
            }

            resolve( this.womanProducts.push(fullInfo));
            const myProduct = new Model(fullInfo);
            myProduct.save();
        });
    }*/

    async find(){
        this.womanProducts = await Model.find({gender:"woman"});

        return this.womanProducts;
    }

    async findOne(id){
        this.womanProducts = await Model.find({gender:"woman"});

        for (let i = 0; i < this.womanProducts.length ; i++) {
            if (this.womanProducts[i].id === parseInt(id)) {
                this.womanProducts = this.womanProducts[i];
                return this.womanProducts;
            }
        }
    }

    async update(id,changeUser, changeProduct, changeDescription, changePrice){
        let lista = await Model.find();
        lista[id-1].user = changeUser;
        lista[id-1].product = changeProduct;
        lista[id-1].description = changeDescription;
        lista[id-1].price = changePrice;

        this.womanProducts = lista;

        const myProduct = new Model(this.manProducts[id-1]);
        await myProduct.save()

        return this.womanProducts;
    }

    async delete(id){
        await Model.deleteOne({id: id});
    }
}
module.exports = WomanProducts;
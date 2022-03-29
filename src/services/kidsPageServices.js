const Model = require("../BBDD/model");

class kidsProduct{
    constructor() {
        this.kidsProducts = [];
    }
  /*  create(user, product, gender,description, price){
        return new Promise((resolve, reject)=>{
            if(user === null || product === null || gender === null||price === null){
                return reject("Faltan datos, único no obligatorio és descripción");
            }
            const id = this.kidsProducts.length + 1
            const fullInfo = {
                id : id,
                user: user,
                gender: gender,
                product: product,
                description: description,
                price: price
            }

            resolve( this.kidsProducts.push(fullInfo));
            const myProduct = new Model(fullInfo);
            myProduct.save();
        });
    }*/

    async find(){
        this.kidsProducts = await Model.find({gender :"kid"});
        return this.kidsProducts;
    }

    async findOne(id){
        this.kidsProducts = await Model.find({_id:id});

        for (let i = 0; i < this.kidsProducts.length ; i++) {
            if (this.kidsProducts[i].id === id) {
                this.kidsProducts = this.kidsProducts[i];
                return this.kidsProducts;
            }
        }
    }

   async update(id, changeUser, changeProduct, changeDescription, changePrice){
        let lista = await Model.find({_id:id});

        lista[0].user = changeUser;
        lista[0].product = changeProduct;
        lista[0].description = changeDescription;
        lista[0].price = changePrice;

        this.kidsProducts = lista;

        const myProduct = new Model(this.kidsProducts[0]);
        await myProduct.save()

        return this.kidsProducts;
    }

    async delete(id){
        await Model.deleteOne({_id:id});
    }
}
module.exports = kidsProduct;
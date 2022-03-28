const Model = require("../BBDD/model");

class kidsProduct{
    constructor() {
        this.kidsProducts = [];
    }
    create(user, product, gender,description, price){
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
    }

    async find(){
        this.kidsProducts = await Model.find({gender :"kid"});
        return this.kidsProducts;
    }

    async findOne(id){
        this.kidsProducts = await Model.find();

        for (let i = 0; i < this.kidsProducts.length ; i++) {
            if (this.kidsProducts[i].id === parseInt(id)) {
                this.kidsProducts = this.kidsProducts[i];
                return this.kidsProducts;
            }
        }
    }

   async update(id, changeUser, changeProduct, changeDescription, changePrice){
        let lista = await Model.find();
        lista[id-1].user = changeUser;
        lista[id-1].product = changeProduct;
        lista[id-1].description = changeDescription;
        lista[id-1].price = changePrice;

        this.kidsProducts = lista;

        const myProduct = new Model(this.kidsProducts[id-1]);
        await myProduct.save()

        return this.kidsProducts;
    }

    async delete(id){
        await Model.deleteOne({id:id});
    }
}
module.exports = kidsProduct;
const Model = require("../BBDD/model");

class manProducts{
    constructor() {
        this.manProducts = [];
    }

    /*create(user, product,gender, description, price, file){
        return new Promise((resolve, reject)=>{
            if(user === null || product === null || price === null){
                return reject("Faltan datos, único no obligatorio és descripción");
            }

            let fileURL ="";
            if(file){
                fileURL = "http://localhost:3000/src/uploads/" +file.filename;
            }

            const id = this.manProducts.length + 1
            const fullInfo = {
                id: id,
                user: user,
                gender:gender,
                product: product,
                description: description,
                price: price,
                file: fileURL
            }

            resolve( this.manProducts.push(fullInfo));
            const myProduct = new Model(fullInfo);
            myProduct.save();
        });
    }
*/
    async find(){
        this.manProducts = await Model.find({gender:"man"});
        return this.manProducts;
    }

   async findOne(id){
        this.manProducts = await Model.find({_id:id});

       for (let i = 0; i < this.manProducts.length ; i++) {
           if (this.manProducts[i].id === id) {
               this.manProducts = this.manProducts[i];
               return this.manProducts;
           }
       }

    }

    async update(id, changeUser, changeProduct, changeDescription, changePrice){
        let lista = await Model.find({_id:id});



        lista[0].user = changeUser;
        lista[0].product = changeProduct;
        lista[0].description = changeDescription;
        lista[0].price = changePrice;

        this.manProducts = lista;

        const myProduct = new Model(this.manProducts[0]);
        await myProduct.save()

        return this.manProducts;
    }

   async delete(id){
     await Model.deleteOne({_id: id});

    }
}

module.exports = manProducts;
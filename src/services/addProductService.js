const Model = require("../BBDD/model");

class addProductService{
    constructor(){
        this.Products = [];
    }

    create(user,gender, product, description, price, file){
        return new Promise((resolve, reject)=>{
            if(user === null || product === null || gender === null|| price === null){
                return reject("Faltan datos, único no obligatorio és descripción");
            }

            let fileURL ="";
            if(file){
                fileURL = "http://localhost:3000/src/uploads/" +file.filename;
            }

            const id = this.Products.length + 1
            const fullInfo = {
                id: id,
                user: user,
                gender:gender,
                product: product,
                description: description,
                price: price,
                file: fileURL
            }

            resolve( this.Products.push(fullInfo));
            const myProduct = new Model(fullInfo);
            myProduct.save();
        });
    }
}

module.exports = addProductService;
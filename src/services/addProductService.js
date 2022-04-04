const Model = require("../BBDD/model");

class addProductService{
    constructor(){
        this.Products = [];
    }

    create(file, user,gender, product, description, price){
        console.log("en la funcion")
        return new Promise((resolve, reject)=>{
            if(user === null || product === null || gender === null|| price === null){
                return reject("Faltan datos, único no obligatorio és descripción");
            }

            let fileURL ="";
            if(file){
                fileURL = "https://fierce-lake-30610.herokuapp.com/api/v1/manPage"+ file.originalname;
                    // "http://localhost:3000/src/uploads/" +file.originalname;
            }

            const fullInfo = {
                file: fileURL,
                user: user,
                gender:gender,
                product: product,
                description: description,
                price: price
            }

            resolve( this.Products.push(fullInfo));
            const myProduct = new Model(fullInfo);
            myProduct.save();
        });
    }
}

module.exports = addProductService;
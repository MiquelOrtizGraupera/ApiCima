const Model = require("../BBDD/model");
const Port = require("../index");

class addProductService{
    constructor(){
        this.Products = [];
    }

    create(user,gender, product, description, price, file){
        return new Promise((resolve, reject)=>{
            if(user === null || product === null || gender === null|| price === null){
                return reject("Faltan datos, único no obligatorio és descripción");
            }

            const port = new Port;
            console.log("Este es mi puerto:" +port);
            let fileURL ="";
            if(file){
                fileURL = "http://localhost:"+port+"/src/uploads/" +file.filename;
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
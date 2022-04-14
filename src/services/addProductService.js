const Model = require("../BBDD/model");
const {response} = require("express");


class addProductService{
    constructor(){
        this.Products = [];
    }

    create(file, user,gender, product, description, price){
        return new Promise((resolve, reject)=>{
            if(user === null || product === null || gender === null|| price === null){
                return reject("Faltan datos, único no obligatorio és descripción");
            }

            // let fileURL ="";
            // if(file){
            //     fileURL = "http://localhost:3000/src/public/uploads/" + file.originalname;
            //     console.log(file);
            //     //" https://api.imgbb.com/1/upload?key=" + "027d1d77723a43090b29521d5ea14fa9";
            //     //    API KEY 027d1d77723a43090b29521d5ea14fa9
            // }
            // console.log(file)
            // let img = fs.readFileSync(request.file.path);
            // let encode_image = img.toString('base64');
            // let finalImg = {
            //     contentType:request.file.mimetype,
            //     image: new Buffer(encode_image,"base64")
            // };

            const fullInfo = {
                file: file.filename,
                user: user,
                gender:gender,
                product: product,
                description: description,
                price: price
            }

            resolve( this.Products.push(fullInfo));
            let myProduct = new Model(fullInfo);
            myProduct.save();
            console.log(myProduct)
        });
    }
}

module.exports = addProductService;
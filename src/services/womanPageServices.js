const fake = require("faker");
class WomanProducts{
    constructor() {
        this.womanProducts = [];
        this.generate();
    }

    generate(){
        const limit = 10;
        for(let index = 0; index<limit;index++){
            this.womanProducts.push({
                id: fake.datatype.uuid(),
                name: fake.commerce.productName(),
                price: fake.commerce.price(),
                image: fake.image.imageUrl()
            })
        }
    }

    create(data){

    }

    find(){

    }

    findOne(){

    }

    update(id, changes){

    }

    delete(id){

    }
}
module.exports = WomanProducts;
const fake = require("faker");

class ManProducts{
    constructor() {
        this.manProducts = [];
        this.generate();
    }

    generate(){
        const limit = 10;
        for(let index = 0; index < limit; index++){
            this.manProducts.push({
                id: fake.datatype.uuid(),
                name: fake.commerce.productName(),
                price: fake.commerce.price(),
                image: fake.image.imageUrl()
            });
        }
    }
    create(data){

    }

    find(){
        return this.manProducts;
    }

    findOne(){

    }

    update(id, changes){

    }

    delete(id){

    }
}

module.exports = ManProducts;
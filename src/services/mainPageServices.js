const ManProducts = require("./manPageServices");
const KidProducts = require("./kidsPageServices");
const WomanProducts = require("./womanPageServices");

class AllProducts{
    constructor() {
       this.allProducts = []
    }

    async find(){
        await this.findMan();
        await this.findWoman();
        await this.findKids();
    }

  async findMan(){
        const manProd = new ManProducts();
        this.allProducts.push(await manProd.find())
        return this.allProducts;
  }

  async findWoman(){
        const womProd = new WomanProducts();
        this.allProducts.push(await womProd.find());
        return this.allProducts
  }

  async findKids(){
        const kProd = new KidProducts();
        this.allProducts.push(await kProd.find());
        return this.allProducts;
  }
}

module.exports = AllProducts;

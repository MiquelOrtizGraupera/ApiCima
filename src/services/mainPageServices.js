const ManProducts = require("./manPageServices");
const KidProducts = require("./kidsPageServices");
const WomanProducts = require("./womanPageServices");

class AllProducts{
    constructor() {
        const manProd = new ManProducts();
        this.mProducts = manProd.find();

        const kidProd = new KidProducts();
        this.kProducts = kidProd.find();

        const wProd = new WomanProducts();
        this.wProducts = wProd.find();
    }

  findMan(){
        return this.mProducts;
  }

  findWoman(){
        return this.wProducts;
  }

  findKids(){
        return this.kProducts;
  }
}

module.exports = AllProducts;

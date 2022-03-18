class kidsProduct{
    constructor() {
        this.kidsProducts = [];
    }
    create(user, product, description, price){
        return new Promise((resolve, reject)=>{
            if(user === null || product === null ||price === null){
                return reject("Faltan datos, único no obligatorio és descripción");
            }
            const id = this.kidsProducts.length + 1
            const fullInfo = {
                id : id,
                user: user,
                product: product,
                description: description,
                price: price
            }

            resolve( this.kidsProducts.push(fullInfo));
        });
    }

    find(){
        return this.kidsProducts;
    }

    findOne(id){
        let lista = this.kidsProductsProducts;
        for (let i = 0; i < lista.length ; i++) {
            if(lista[i].id.toString() === id){
                return lista[i];
            }
        }
    }

    update(id, changeUser, changeProduct, changeDescription, changePrice){
        return new Promise(((resolve, reject) => {
            let lista  = this.kidsProducts;
            for (let i = 0; i < lista.length; i++) {
                if(lista[i].id.toString() === id){
                    const info ={
                        id: lista[i].id,
                        user: changeUser,
                        product: changeProduct,
                        description: changeDescription,
                        price: changePrice
                    }
                    lista[i] = info;
                    resolve('Changes has been done! '+info) ;
                }
            }
        }))
    }

    delete(id){
        return new Promise((resolve, reject) => {
            let lista = this.kidsProducts;
            for (let i = 0; i < lista.length ; i++) {
                if(lista[i].id.toString() === id){
                    this.kidsProducts.splice(lista[i].id);
                    break;
                }
            }
            resolve('Elimination perfectamente');
        });
    }
}
module.exports = kidsProduct;

class ManProducts{
    constructor() {
        this.manProducts = [];
    }

    create(user, product, description, price){
        return new Promise((resolve, reject)=>{
            if(user === null || product === null ||price === null){
                return reject("Faltan datos, único no obligatorio és descripción");
            }
            const id = this.manProducts.length + 1
            const fullInfo = {
                id : id,
                user: user,
                product: product,
                description: description,
                price: price
            }

            resolve( this.manProducts.push(fullInfo));
        });
    }

    find(){
        return this.manProducts;
    }

    findOne(id){
        let lista = this.manProducts;
        for (let i = 0; i < lista.length ; i++) {
            if(lista[i].id.toString() === id){
                return lista[i];
            }
        }
    }

    update(id, changeUser, changeProduct, changeDescription, changePrice){
       return new Promise(((resolve, reject) => {
           let lista  = this.manProducts;
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
            let lista = this.manProducts;
            for (let i = 0; i < lista.length ; i++) {
                if(lista[i].id.toString() === id){
                    this.manProducts.splice(lista[i].id);
                    break;
                }
            }
            resolve('Elimination perfectamente');
        });

    }
}

module.exports = ManProducts;
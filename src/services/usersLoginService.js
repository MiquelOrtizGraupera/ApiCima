const Model = require("../BBDD/modelUsers");
const Verify = require("../auth/pass-verify");

class usersLoginService{
    constructor() {
        this.userList = [];
    }

     create(userName, userEmail, userPassword){
        return new Promise((async (resolve, reject) => {
            if (userName === null || userEmail === null | userPassword === null) {
                return reject("Faltan datos!")
            }
            const fullInfo = {
                username: userName,
                email: userEmail,
                password: userPassword
            }
            const pass = new Verify();
            fullInfo.password = await pass.hashPassword(fullInfo.password);

            console.log(fullInfo.password)
            console.log(fullInfo.password.toString())

            this.userList.push(fullInfo);
            const myUser = new Model(fullInfo);
            resolve(myUser.save());
        }))
    }

    async find(){
        this.userList = await Model.find();
        return this.userList;
    }

    async findOne(id){}

    async update(id, changeName, changeEmail,changePassword){}

    async delete(id){}
}

module.exports = usersLoginService;
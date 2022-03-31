const bcrypt = require('bcrypt');

class UserVerify{
    constructor(userPassword) {
       this.userPassword = userPassword;
    }
    async hashPassword(myPassword){
        const hash = await bcrypt.hash(myPassword, 10);
        // console.log(hash);
        return hash;
    }

    async verifyPassword(myPassword){
        // const myPassword = 'admin123';
        // const hashOrigin = "$2b$10$NDkT3yZpksgLIArPtAgy2eMNKrmXklTWWr3eMKR8KDuuv3TSbxMEe";
        const crypt = this.hashPassword(myPassword);


        const ismatch = await bcrypt.compare(myPassword, crypt);

        if(ismatch){
            return this.userPassword;
        }
        console.log(ismatch);
    }
}
module.exports = UserVerify;


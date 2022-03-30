const bcrypt = require('bcrypt');

async function verifyPassword(){
    const myPassword = 'admin123';
    const hashOrigin = "$2b$10$NDkT3yZpksgLIArPtAgy2eMNKrmXklTWWr3eMKR8KDuuv3TSbxMEe";

    const ismatch = await bcrypt.compare(myPassword, hashOrigin);
    console.log(ismatch);
}
verifyPassword();
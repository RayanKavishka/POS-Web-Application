import {userDB} from "../db/db.js";
import {UserDTO} from "../dto/UserDTO.js";

// Save user account
let userId = 0;
const saveUserAccount = (userName, password) => {
    userId += 1;
    let newUser = new UserDTO(userId, userName, password);

    userDB.push(newUser);
};


// Check valid user
const checkValidUser = (userName, password) => {
    for (let user of userDB) {
        if (user.userName === userName && user.password === password) {
            return true;
        }
    }

    return false;
};


export {saveUserAccount, checkValidUser};
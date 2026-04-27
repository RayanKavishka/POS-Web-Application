class UserDTO {
    #id;
    #userName;
    #password;

    constructor(id, userName, password) {
        this.#id = id;
        this.#userName = userName;
        this.#password = password;
    }

    get id() {
        return this.#id;
    }

    set id(id) {
        this.#id = id;
    }

    get userName() {
        return this.#userName;
    }

    set userName(userName) {
        this.#userName = userName;
    }

    get password() {
        return this.#password;
    }

    set password(password) {
        this.#password = password;
    }
}


export {UserDTO};
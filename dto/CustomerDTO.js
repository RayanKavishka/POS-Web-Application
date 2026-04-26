class CustomerDTO {
    #id;
    #name;
    #mobile;
    #address;

    constructor(id, name, mobile, address) {
        this.#id = id;
        this.#name = name;
        this.#mobile = mobile;
        this.#address = address;
    }

    get id() {
        return this.#id;
    }

    set id(id) {
        this.#id = id;
    }

    get name() {
        return this.#name;
    }

    set name(name) {
        this.#name = name;
    }

    get mobile() {
        return this.#mobile;
    }

    set mobile(mobile) {
        this.#mobile = mobile;
    }

    get address() {
        return this.#address;
    }

    set address(address) {
        this.#address = address;
    }
}

export {CustomerDTO};
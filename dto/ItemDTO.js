class ItemDTO {
    #id;
    #name;
    #price;
    #quantity;

    constructor(id, name, price, quantity) {
        this.#id = id;
        this.#name = name;
        this.#price = price;
        this.#quantity = quantity;
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

    get price() {
        return this.#price;
    }

    set price(price) {
        this.#price = price;
    }

    get quantity() {
        return this.#quantity;
    }

    set quantity(quantity) {
        this.#quantity = quantity;
    }
}
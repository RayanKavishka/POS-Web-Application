class OrderDTO {
    #id;
    #customerName;
    #itemName;
    #unitPrice;
    #quantity;
    #total;
    #date;

    constructor(id, customerName, itemName, unitPrice, quantity, total, date) {
        this.#id = id;
        this.#customerName = customerName;
        this.#itemName = itemName;
        this.#unitPrice = unitPrice;
        this.#quantity = quantity;
        this.#total = total;
        this.#date = date;
    }

    get id() {
        return this.#id;
    }

    set id(id) {
        this.#id = id;
    }

    get customerName() {
        return this.#customerName;
    }

    set customerName(customerName) {
        this.#customerName = customerName;
    }

    get itemName() {
        return this.#itemName;
    }

    set itemName(itemName) {
        this.#itemName = itemName;
    }

    get quantity() {
        return this.#quantity;
    }

    set quantity(quantity) {
        this.#quantity = quantity;
    }

    get unitPrice() {
        return this.#unitPrice;
    }

    set unitPrice(unitPrice) {
        this.#unitPrice = unitPrice;
    }

    get total() {
        return this.#total;
    }

    set total(total) {
        this.#total = total;
    }

    get date() {
        return this.#date;
    }

    set date(date) {
        this.#date = date;
    }
}

export {OrderDTO};
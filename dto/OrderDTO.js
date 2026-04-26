class OrderDTO {
    #id;
    #customerId;
    #itemName;
    #quantity;
    #unitPrice;
    #total;
    #date;

    constructor(id, customerId, itemName, quantity, unitPrice, total, date) {
        this.#id = id;
        this.#customerId = customerId;
        this.#itemName = itemName;
        this.#quantity = quantity;
        this.#unitPrice = unitPrice;
        this.#total = total;
        this.#date = date;
    }

    get id() {
        return this.#id;
    }

    set id(id) {
        this.#id = id;
    }

    get customerId() {
        return this.#customerId;
    }

    set customerId(customerId) {
        this.#customerId = customerId;
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
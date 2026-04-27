class ItemCardDTO {
    #itemId;
    #itemName;
    #unitPrice;
    #quantity;
    #amount;

    constructor(itemId, itemName, unitPrice, quantity, amount) {
        this.#itemId = itemId;
        this.#itemName = itemName;
        this.#unitPrice = unitPrice;
        this.#quantity = quantity;
        this.#amount = amount;
    }

    get itemId() {
        return this.#itemId;
    }

    get itemName() {
        return this.#itemName;
    }

    get unitPrice() {
        return this.#unitPrice;
    }

    get quantity() {
        return this.#quantity;
    }

    get amount() {
        return this.#amount;
    }

    set itemId(itemId) {
        this.#itemId = itemId;
    }

    set itemName(itemName) {
        this.#itemName = itemName;
    }

    set unitPrice(unitPrice) {
        this.#unitPrice = unitPrice;
    }

    set quantity(quantity) {
        this.#quantity = quantity;
    }

    set amount(amount) {
        this.#amount = amount;
    }
}

export {ItemCardDTO};
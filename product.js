export default class Product {
    constructor(product) {
        this._code = product.code;
        this._name = product.name;
        this._price = product.price;
        this._quantity = product.quantity;
        this._description = product.description;
        this._left = null;
        this._right = null;
    }

    get code() {
        return this._code;
    }

    get name() {
        return this._name;
    }

    get price() {
        return this._price;
    }

    set price(newPrice) {
        this._price = newPrice;
    }

    get quantity() {
        return this._quantity;
    }

    set quantity(newQuantity) {
        this._quantity = newQuantity;
    }

    get description() {
        return this._description;
    }

    set description(newDescription) {
        this._description = newDescription;
    }

    get right() {
        return this._right;
    }

    set right(newRight) {
        this._right = newRight;
    }

    get left() {
        return this._left;
    }

    set left(newLeft) {
        this._left = newLeft;
    }

    toString() {
        return `${this._code} Product: ${this._name} ${this._description} with a cost of $${this._price}. Quantity in stock: ${this._quantity}`;
    }
}
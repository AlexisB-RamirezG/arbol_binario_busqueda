export default class Inventory {
    constructor() {
        this._root = null;
        this._inventoryString = "";
    }

    get inventoryString() {
        return this._inventoryString;
    }

    registerProduct(product) {
        if (this._root == null) {
            this._root = product;
        } else {
            this._insertProductInPlace(product, this._root);
        }
        console.log(this._root);
    }

    _insertProductInPlace(product, root) {
        if (product.code < root.code) {
            if (root.left == null) {
                root.left = product;
                return;
            } else {
                this._insertProductInPlace(product, root.left);
            }
        } else {
            if (root.right == null) {
                root.right = product;
                return;
            } else {
                this._insertProductInPlace(product, root.right);
            }
        }
        return null;
    }

    searchForInquiry(code) {
        let product = this._searchRegisteredProduct(code, this._root);
        if (product == null) {
            return "Not found";
        } else {
            return product.toString();
        }
    }

    _searchRegisteredProduct(code, root) {
        if (root != null) {
            if (code == root.code) {
                return root;
            } else if (code < root.code) {
                return this._searchRegisteredProduct(code, root.left);
            } else {
                return this._searchRegisteredProduct(code, root.right);
            }
        }
        return null;
    }

    getInventoryPreOrder() {
        this._inventoryString = "";
        if (this._root != null) {
            this._getInventoryPreOrderAsString(this._root);
        }
    }

    getInventoryInOrder() {
        this._inventoryString = "";
        if (this._root != null) {
            this._getInventoryInOrderAsString(this._root);
        }
    }

    getInventoryPostOrder() {
        this._inventoryString = "";
        if (this._root != null) {
            this._getInventoryPostOrderAsString(this._root);
        }
    }

    _getInventoryPreOrderAsString(root) {
        this._inventoryString += root.toString() + "<br>";
        if (root.left != null) {
            this._getInventoryPreOrderAsString(root.left);
        }
        if (root.right != null) {
            this._getInventoryPreOrderAsString(root.right);
        }
    }

    _getInventoryInOrderAsString(root) {
        if (root.left != null) {
            this._getInventoryInOrderAsString(root.left);
        }
        this._inventoryString += root.toString() + "<br>";
        if (root.right != null) {
            this._getInventoryInOrderAsString(root.right);
        }
    }

    _getInventoryPostOrderAsString(root) {
        if (root.left != null) {
            this._getInventoryPostOrderAsString(root.left);
        }
        if (root.right != null) {
            this._getInventoryPostOrderAsString(root.right);
        }
        this._inventoryString += root.toString() + "<br>";
    }
}
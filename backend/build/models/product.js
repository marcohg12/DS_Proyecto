var Product = /** @class */ (function () {
    function Product(id_product, name, units, price) {
        this.id_product = id_product;
        this.name = name;
        this.units = units;
        this.price = price;
    }
    Product.prototype.getID = function () {
        return this.id_product;
    };
    Product.prototype.getName = function () {
        return this.name;
    };
    Product.prototype.getDescription = function () {
        return this.description;
    };
    Product.prototype.getUnits = function () {
        return this.units;
    };
    Product.prototype.getPrice = function () {
        return this.price;
    };
    Product.prototype.getPhoto = function () {
        return this.photo;
    };
    Product.prototype.setId = function (new_id) {
        this.id_product = new_id;
    };
    Product.prototype.setName = function (newName) {
        this.name = newName;
    };
    Product.prototype.setDescription = function (new_desc) {
        this.description = new_desc;
    };
    Product.prototype.setUnits = function (new_units) {
        this.units = new_units;
    };
    Product.prototype.setPrice = function (new_price) {
        this.price = new_price;
    };
    Product.prototype.setPhoto = function (new_photo) {
        this.photo = new_photo;
    };
    return Product;
}());

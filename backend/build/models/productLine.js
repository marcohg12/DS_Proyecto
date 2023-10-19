var ProductLine = /** @class */ (function () {
    function ProductLine(name, units, price) {
        this.name = name;
        this.units = units;
        this.price = price;
    }
    ProductLine.prototype.getName = function () {
        return this.name;
    };
    ProductLine.prototype.getUnits = function () {
        return this.units;
    };
    ProductLine.prototype.getPrice = function () {
        return this.price;
    };
    ProductLine.prototype.setName = function (new_name) {
        this.name = new_name;
    };
    ProductLine.prototype.setUnits = function (new_units) {
        this.units = new_units;
    };
    ProductLine.prototype.setPrice = function (new_price) {
        this.price = new_price;
    };
    return ProductLine;
}());

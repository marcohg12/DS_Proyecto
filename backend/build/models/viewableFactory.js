"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewableFactory = void 0;
var publication_1 = require("./publication");
var product_1 = require("./product");
var ViewableFactory = /** @class */ (function () {
    function ViewableFactory() {
    }
    ViewableFactory.prototype.createProduct = function (name, description, units, price, photo, productId) {
        var product = new product_1.Product(description, photo, name, units, price, productId);
        return product;
    };
    ViewableFactory.prototype.createPublication = function (description, tags, categoryId, photoPath, publicationId) {
        // Tomamos el string de palabras clave y generamos una lista con las palabras
        // Nota: las palabras se separan por coma
        var keywords = tags.split(",");
        // Quitamos los espacios en blanco al inicio y al final de cada palabra
        var trimmedKeywords = keywords.map(function (keyword) { return keyword.trim(); });
        var publication = new publication_1.Publication(categoryId, new Date(), description, photoPath, trimmedKeywords, publicationId);
        return publication;
    };
    //Falta implementar ---> Falta el enum para ver que tipo es
    ViewableFactory.prototype.getViewable = function () { };
    return ViewableFactory;
}());
exports.ViewableFactory = ViewableFactory;

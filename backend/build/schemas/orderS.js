"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var mongoose_2 = __importDefault(require("mongoose"));
var mongodb_1 = require("mongodb");
var orderSchema = new mongoose_1.Schema({
    client: { type: String, required: true },
    orderDate: { type: Date, required: true },
    deliveryDate: { type: Date, required: true },
    address: { type: String, required: true },
    priceWithDelivery: { type: mongodb_1.Double, required: true },
    photoOfPayment: { type: String, required: true },
    lineProduct: { type: [String], required: true },
    state: { type: Number, required: true }, // 1:Pendiente, 2:Aceptado, 3:Entregado, 4:Cancelado 
});
exports.default = mongoose_2.default.model("Order", orderSchema);

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var mongoose_2 = __importDefault(require("mongoose"));
var userS_1 = __importDefault(require("./userS"));
var productS_1 = __importDefault(require("./productS"));
var cartSchema = new mongoose_1.Schema({
    idCarrito: { type: String, required: true },
    client: { type: userS_1.default, required: true },
    prodcuts: { type: productS_1.default, required: true }, //Collection   
});
exports.default = mongoose_2.default.model("Cart", cartSchema);

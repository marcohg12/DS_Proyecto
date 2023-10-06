"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var url = "mongodb+srv://nottwithtt:Nicolita1998+@cluster0.gi2w4fi.mongodb.net/DS_Project?retryWrites=true&w=majority";
var Database = /** @class */ (function () {
    function Database() {
        this._connect();
    }
    Database.prototype._connect = function () {
        mongoose_1.default
            .connect(url)
            .then(function () {
            console.log("Database connection successful");
        })
            .catch(function (err) {
            console.error("Database connection error");
        });
    };
    return Database;
}());
exports.default = new Database();

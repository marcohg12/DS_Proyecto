"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userExists = exports.compareRecoverCode = exports.updateRecoverCode = exports.updatePassword = exports.updateUser = exports.registerUser = void 0;
var userDAO = __importStar(require("../dao_controllers/userDAO"));
var emailService_1 = require("./emailService");
var bcrypt = require("bcryptjs");
// Funciones auxiliares -------------------------------------------------------------------
function generateNumericPasswordRecoveryCode(length) {
    var charset = "0123456789";
    var code = "";
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * charset.length);
        code += charset[randomIndex];
    }
    return code;
}
// ----------------------------------------------------------------------------------------
// Registra un usuario
function registerUser(name, email, phone, password) {
    return __awaiter(this, void 0, void 0, function () {
        var result, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    return [4 /*yield*/, userDAO.getUserByEmail(email)];
                case 1:
                    result = _a.sent();
                    if (!result) return [3 /*break*/, 2];
                    return [2 /*return*/, {
                            error: true,
                            message: "El correo electrónico ya se encuentra en uso",
                        }];
                case 2: return [4 /*yield*/, userDAO.registerUser(name, email, phone, password)];
                case 3:
                    _a.sent();
                    return [2 /*return*/, {
                            error: false,
                            message: "Usuario registrado exitosamente",
                        }];
                case 4: return [3 /*break*/, 6];
                case 5:
                    err_1 = _a.sent();
                    return [2 /*return*/, {
                            error: true,
                            message: "Ocurrió un error inesperado, intente de nuevo",
                        }];
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.registerUser = registerUser;
// Actualiza los datos de un usuario
function updateUser(userId, name, email, phone, password) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, userDAO.updateUser(userId, name, email, phone, password)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.updateUser = updateUser;
// Actualiza la contraseña de un usuario
function updatePassword(email, password) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, userDAO.updatePassword(email, password)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.updatePassword = updatePassword;
// Actualiza el código de recuperación de contraseña de un usuario
function updateRecoverCode(email) {
    return __awaiter(this, void 0, void 0, function () {
        var code, content;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    code = generateNumericPasswordRecoveryCode(8);
                    content = "El código de recuperación es: " + code.toString();
                    (0, emailService_1.sendEmail)(email.toString(), "Sistema Duende - Código de recuperación de contraseña", content);
                    return [4 /*yield*/, userDAO.updateRecoverCode(email, code)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.updateRecoverCode = updateRecoverCode;
// Verifica si el código de recuperación ingresado por un usuario es igual al de la BD
function compareRecoverCode(email, code) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, userDAO.compareRecoverCode(email, code)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.compareRecoverCode = compareRecoverCode;
// Verifica si existe el usuario con el email del parámetro
function userExists(email) {
    return __awaiter(this, void 0, void 0, function () {
        var user, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, userDAO.getUserByEmail(email)];
                case 1:
                    user = _a.sent();
                    result = user ? true : false;
                    if (result) {
                        updateRecoverCode(email);
                    }
                    return [2 /*return*/, result];
            }
        });
    });
}
exports.userExists = userExists;

"use strict";
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (
          !desc ||
          ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === "function" &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while ((g && ((g = 0), op[0] && (_ = 0)), _))
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y["return"]
                  : op[0]
                  ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.confirmOrder =
  exports.setOrderState =
  exports.getUserOrders =
  exports.getOrder =
  exports.getOrders =
    void 0;
var orderDAO = __importStar(require("../dao_controllers/orderDAO"));
var productDAO = __importStar(require("../dao_controllers/productDAO"));
var exceptions_1 = require("../exceptions/exceptions");
// Obtiene todos los pedidos registrados
function getOrders() {
  return __awaiter(this, void 0, void 0, function () {
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4 /*yield*/, orderDAO.getOrders()];
        case 1:
          return [2 /*return*/, _a.sent()];
      }
    });
  });
}
exports.getOrders = getOrders;
// Obtiene el detalle de un pedido
function getOrder(orderId) {
  return __awaiter(this, void 0, void 0, function () {
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4 /*yield*/, orderDAO.getDetail(orderId)];
        case 1:
          return [2 /*return*/, _a.sent()];
      }
    });
  });
}
exports.getOrder = getOrder;
// Obtiene todos los pedidos de un usuario
function getUserOrders(userId) {
  return __awaiter(this, void 0, void 0, function () {
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4 /*yield*/, orderDAO.getOrdersUser(userId)];
        case 1:
          return [2 /*return*/, _a.sent()];
      }
    });
  });
}
exports.getUserOrders = getUserOrders;
// Cambia el estado de un pedido
function setOrderState(orderId, state) {
  return __awaiter(this, void 0, void 0, function () {
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4 /*yield*/, orderDAO.changeOrderState(orderId, state)];
        case 1:
          return [2 /*return*/, _a.sent()];
      }
    });
  });
}
exports.setOrderState = setOrderState;
// Confirma un pedido
// Valida que por cada producto del pedido hayan unidades suficientes o
// que el producto exista en el inventario
function confirmOrder(orderId) {
  return __awaiter(this, void 0, void 0, function () {
    var order, productLines, i, product;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4 /*yield*/, orderDAO.getDetail(orderId)];
        case 1:
          order = _a.sent();
          productLines = order.lineProducts;
          i = 0;
          _a.label = 2;
        case 2:
          if (!(i < productLines.length)) return [3 /*break*/, 5];
          return [4 /*yield*/, productDAO.getProduct(productLines[i]._id)];
        case 3:
          product = _a.sent();
          if (product == undefined) {
            throw new exceptions_1.ProductDoesNotExists(productLines[i].name);
          }
          if (product.units - productLines[i].units < 0) {
            throw new exceptions_1.ProductNotInStock(productLines[i].name);
          }
          //Update the product stock
          productDAO.updateProduct(
            productLines[i]._id,
            product.name,
            product.description,
            product.units - productLines[i].units,
            product.price
          );
          _a.label = 4;
        case 4:
          i++;
          return [3 /*break*/, 2];
        case 5:
          orderDAO.changeOrderState(orderId, 2);
          return [2 /*return*/];
      }
    });
  });
}
exports.confirmOrder = confirmOrder;

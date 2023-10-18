const router = require("express").Router();
const multer = require("multer");
const { EmailInUse } = require("../exceptions/exceptions");
const paymentUpload = multer({ dest: "photos/payments" });
import { Request, Response } from "express";
import * as controller from "../controllers/controller";

// Funciones de carrito -------------------------------------------------------------------------

router.post("/add_product_to_cart", async (req: Request, res: Response) => {
  const { productId, units } = req.body;
  const user: any = req.user;
  const userId = user.id;
  try {
    await controller.addProductToCart(userId, productId, units);
    res.send(
      JSON.stringify({ error: false, message: "Producto agregado al carrito" })
    );
  } catch (e) {
    res.send(
      JSON.stringify({
        error: true,
        message: "Ocurrió un error inesperado, intente de nuevo",
      })
    );
  }
});

router.post(
  "/delete_product_from_cart",
  async (req: Request, res: Response) => {
    const { productId } = req.body;
    const user: any = req.user;
    const userId = user.id;
    try {
      await controller.deleteProductFromCart(userId, productId);
      res.send(
        JSON.stringify({
          error: false,
          message: "Producto eliminado",
        })
      );
    } catch (e) {
      res.send(
        JSON.stringify({
          error: true,
          message: "Ocurrió un error inesperado, intente de nuevo",
        })
      );
    }
  }
);

router.get("/get_cart", async (req: Request, res: Response) => {
  const user: any = req.user;
  const userId = user.id;
  try {
    const cart = await controller.getCart(userId);
    res.send(
      JSON.stringify({
        error: false,
        message: "Carrito consultado exitosamente",
        result: cart,
      })
    );
  } catch (e) {
    res.send(
      JSON.stringify({
        error: true,
        message: "Ocurrió un error inesperado, intente de nuevo",
      })
    );
  }
});

router.post(
  "/confirm_order",
  paymentUpload.single("photo"),
  async (req: Request, res: Response) => {
    const { address, totalPrice } = req.body;
    const user: any = req.user;
    const userId = user.id;
    try {
      await controller.sendOrder(userId, address, totalPrice);
      res.send(
        JSON.stringify({ error: false, message: "Orden generada exitosamente" })
      );
    } catch (e) {
      res.send(
        JSON.stringify({
          error: true,
          message: "Ocurrió un error inesperado, intente de nuevo",
        })
      );
    }
  }
);

// Rutas de pedidos -------------------------------------------------------------------------------

router.get("/get_orders", async (req: Request, res: Response) => {
  const user: any = req.user;
  const userId = user.id;
  try {
    const orders = await controller.getUserOrders(userId);
    res.send(
      JSON.stringify({
        error: false,
        message: "Pedidos consultados exitosamente",
        result: orders,
      })
    );
  } catch (e) {
    res.send(
      JSON.stringify({
        error: true,
        message: "Ocurrió un error inesperado, intente de nuevo",
      })
    );
  }
});

module.exports = router;

const router = require("express").Router();
const multer = require("multer");
import { Request, Response } from "express";
import * as controller from "../controllers/controller";

router.get("/get_products", async (req: Request, res: Response) => {
  try {
    const products = await controller.getProducts();
    res.send(
      JSON.stringify({
        error: false,
        message: "Productos consultados exitosamente",
        result: products,
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

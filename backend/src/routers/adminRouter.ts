const router = require("express").Router();
const multer = require("multer");
import { Request, Response } from "express";
import * as controller from "../controllers/controller";
const productUpload = multer({ dest: "photos/products" });

router.post(
  "/register_product",
  productUpload.single("photo"),
  async (req: Request, res: Response) => {
    const { name, description, units, price } = req.body;
    const photoPath = req.file ? req.file.path : "";
    try {
      await controller.registerProduct(
        name,
        description,
        units,
        price,
        photoPath
      );
      res.send(
        JSON.stringify({
          error: false,
          message: "Producto registrado exitosamente",
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

module.exports = router;

const router = require("express").Router();
const multer = require("multer");
import { Request, Response } from "express";
import * as controller from "../controllers/controller";

// Rutas de productos -----------------------------------------------------------------

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

router.get("/get_product/:id", async (req: Request, res: Response) => {
  try {
    const product = await controller.getProduct(req.params.id);
    res.send(
      JSON.stringify({
        error: false,
        message: "Producto consultado exitosamente",
        result: product,
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

// Rutas de categorías -----------------------------------------------------------------------

router.get("/get_categories", async (req: Request, res: Response) => {
  try {
    const categories = await controller.getCategories();
    res.send({
      error: false,
      message: "Categorías consultadas exitosamente",
      result: categories,
    });
  } catch (e) {
    res.send(
      JSON.stringify({
        error: true,
        message: "Ocurrió un error inesperado, intente de nuevo",
      })
    );
  }
});

router.get("/get_subcategories/:id", async (req: Request, res: Response) => {
  try {
    const subcategories = await controller.getSubCategories(req.params.id);
    res.send({
      error: false,
      message: "Subcategorías consultadas exitosamente",
      result: subcategories,
    });
  } catch (e) {
    res.send(
      JSON.stringify({
        error: true,
        message: "Ocurrió un error inesperado, intente de nuevo",
      })
    );
  }
});

router.get("/get_category/:id", async (req: Request, res: Response) => {
  try {
    const category = await controller.getCategory(req.params.id);
    res.send({
      error: false,
      message: "Categorías consultadas exitosamente",
      result: category,
    });
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

const router = require("express").Router();
const multer = require("multer");
import { Request, Response } from "express";
import * as controller from "../controllers/controller";

// Rutas de publicaciones -------------------------------------------------------------

router.get("/get_publications", async (req: Request, res: Response) => {
  try {
    let publications = [];
    if (Object.keys(req.query).length > 0) {
      if (req.query.categoryId) {
        const categoryId = new String(req.query.categoryId);
        publications = await controller.getPublicationsByCategory(categoryId);
      } else {
        const tags = req.query.keywords ? new String(req.query.keywords) : "";
        // Tomamos el string de palabras clave y generamos una lista con las palabras
        // Nota: las palabras se separan por coma
        const keywords = tags.split(",");
        // Quitamos los espacios en blanco al inicio y al final de cada palabra
        const trimmedKeywords = keywords.map((keyword) => keyword.trim());
        publications = await controller.getPublicationsByTags(trimmedKeywords);
      }
    } else {
      publications = await controller.getPublications();
    }
    res.send(
      JSON.stringify({
        error: false,
        message: "Publicaciones consultadas exitosamente",
        result: publications,
      })
    );
  } catch (e) {
    console.log(e);
    res.send(
      JSON.stringify({
        error: true,
        message: "Ocurrió un error inesperado, intente de nuevo",
      })
    );
  }
});

router.get("/get_publication/:id", async (req: Request, res: Response) => {
  try {
    const publication = await controller.getPublication(req.params.id);
    res.send(
      JSON.stringify({
        error: false,
        message: "Publicación consultado exitosamente",
        result: publication,
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

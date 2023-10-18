const router = require("express").Router();
const multer = require("multer");
const { EmailInUse } = require("../exceptions/exceptions");
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

// Rutas de usuario -----------------------------------------------------------------------

router.post("/update_user", async (req: Request, res: Response) => {
  const { userId, name, email, phone, password } = req.body;
  try {
    await controller.updateUser(userId, name, email, phone, password);
    res.send(
      JSON.stringify({
        error: false,
        message: "Datos actualizados exitosamente",
      })
    );
  } catch (e) {
    if (e instanceof Error) {
      let message = "Ocurrió un error inesperado, intente de nuevo";
      if (e instanceof EmailInUse) {
        message = e.message;
      }
      res.send(
        JSON.stringify({
          error: true,
          message: message,
        })
      );
    }
  }
});

router.post("/update_user_code", async (req: Request, res: Response) => {
  const { email } = req.body;
  try {
    await controller.updateRecoverCode(email);
    res.send(
      JSON.stringify({
        error: false,
        message: "Código actualizado exitosamente",
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

router.get("/check_recover_code", async (req: Request, res: Response) => {
  const { email, code } = req.query;
  try {
    const result = await controller.compareRecoverCode(
      new String(email),
      new String(code)
    );
    res.send(
      JSON.stringify({
        error: false,
        message: "Código comparado exitosamente",
        result: result,
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

router.get("/check_email_exists", async (req: Request, res: Response) => {
  const { email } = req.query;
  try {
    const result = await controller.userExists(new String(email));
    res.send(
      JSON.stringify({
        error: false,
        message: "Correo electrónico verificado exitosamente",
        result: result,
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

router.post("/update_user_password", async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    await controller.updatePassword(email, password);
    res.send(
      JSON.stringify({
        error: false,
        message: "Contraseña actualizada exitosamente",
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

// Rutas de pedidos -----------------------------------------------------------------------------------

router.get("/get_ordes", async (req: Request, res: Response) => {
  try {
    const orders = await controller.getOrders();
    res.send(
      JSON.stringify({
        error: false,
        message: "Pedidos consultado exitosamente",
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

router.get("/get_order/:orderId", async (req: Request, res: Response) => {
  const orderId = req.params.orderId;
  try {
    const order = await controller.getOrder(orderId);
    res.send(
      JSON.stringify({
        error: false,
        message: "Pedido consultado exitosamente",
        result: order,
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

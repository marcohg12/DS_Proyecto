const router = require("express").Router();
const multer = require("multer");
import { Request, Response } from "express";
import { Controller } from "../controllers/Controller";
const productUpload = multer({ dest: "photos/products" });
const publicationUpload = multer({ dest: "photos/publications" });
const controller = Controller.getInstance();

// Rutas de productos --------------------------------------------------------------------
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

router.post("/delete_product/:id", async (req: Request, res: Response) => {
  try {
    await controller.deleteProduct(req.params.id);
    res.send(
      JSON.stringify({
        error: false,
        message: "Producto eliminado exitosamente",
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
  "/update_product",
  productUpload.single("photo"),
  async (req: Request, res: Response) => {
    const { productId, name, description, units, price } = req.body;
    const photoPath = req.file ? req.file.path : "";
    try {
      await controller.updateProduct(
        productId,
        name,
        description,
        units,
        price,
        photoPath
      );
      res.send(
        JSON.stringify({
          error: false,
          message: "Producto actualizado exitosamente",
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

// Rutas de categorías -------------------------------------------------------------------

router.post("/register_category", async (req: Request, res: Response) => {
  const name = req.body.name;
  try {
    await controller.registerCategory(name);
    res.send({ error: false, message: "Categoría registrada exitosamente" });
  } catch (e) {
    res.send(
      JSON.stringify({
        error: true,
        message: "Ocurrió un error inesperado, intente de nuevo",
      })
    );
  }
});

router.post("/register_subcategory", async (req: Request, res: Response) => {
  const { name, fatherCategory } = req.body;
  try {
    await controller.registerSubcategory(name, fatherCategory);
    res.send({ error: false, message: "Subcategoría registrada exitosamente" });
  } catch (e) {
    res.send(
      JSON.stringify({
        error: true,
        message: "Ocurrió un error inesperado, intente de nuevo",
      })
    );
  }
});

router.post("/edit_category", async (req: Request, res: Response) => {
  try {
    const { name, categoryId } = req.body;
    await controller.updateCategory(categoryId, name);
    res.send({ error: false, message: "Categoría actualizada exitosamente" });
  } catch (e) {
    res.send(
      JSON.stringify({
        error: true,
        message: "Ocurrió un error inesperado, intente de nuevo",
      })
    );
  }
});

router.post("/delete_category", async (req: Request, res: Response) => {
  try {
    await controller.deleteCategory(req.body.categoryId);
    res.send(
      JSON.stringify({
        error: false,
        message: "Categoría eliminada exitosamente",
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

// Rutas de publicaciones ----------------------------------------------------------------

router.post(
  "/register_publication",
  publicationUpload.single("photo"),
  async (req: Request, res: Response) => {
    try {
      const { description, keywords, categoryId } = req.body;
      const photoPath = req.file ? req.file.path : "";
      await controller.registerPublication(
        description,
        keywords,
        categoryId,
        photoPath
      );
      res.send(
        JSON.stringify({
          error: false,
          message: "Publicación registrada exitosamente",
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

router.post(
  "/update_publication",
  publicationUpload.single("photo"),
  async (req: Request, res: Response) => {
    const { publicationId, description, tags, categoryId } = req.body;
    const photoPath = req.file ? req.file.path : "";
    try {
      await controller.updatePublication(
        publicationId,
        description,
        tags,
        categoryId,
        photoPath
      );
      res.send(
        JSON.stringify({
          error: false,
          message: "Publicación actualizada exitosamente",
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

router.post("/delete_publication/:id", async (req: Request, res: Response) => {
  const publicationId = req.params.id;
  try {
    await controller.deletePublication(publicationId);
    res.send(
      JSON.stringify({
        error: false,
        message: "Publicación eliminada exitosamente",
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

// Rutas de pedidos ----------------------------------------------------------------------

router.post("/set_order_state", async (req: Request, res: Response) => {
  try {
  } catch (e) {
    res.send(
      JSON.stringify({
        error: true,
        message: "Ocurrió un error inesperado, intente de nuevo",
      })
    );
  }
});

// Rutas de pedidos ----------------------------------------------------------------------

router.post("/set_order_state", async (req: Request, res: Response) => {
  const { orderId, state } = req.body;
  try {
    await controller.setOrderState(orderId, state);
    res.send(
      JSON.stringify({
        error: false,
        message: "Estado de pedido actualizado exitosamente",
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

router.post("/confirm_order", async (req: Request, res: Response) => {
  const { orderId } = req.body;
  try {
    await controller.confirmOrder(orderId);
    res.send(
      JSON.stringify({
        error: false,
        message: "Pedido confirmado exitosamente",
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

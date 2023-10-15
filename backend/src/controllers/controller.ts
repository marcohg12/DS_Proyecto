import * as userController from "./userAdmin";
import * as cartController from "./cartAdmin";
import * as categoryController from "./categoryAdmin";
import * as publicationController from "./publicationAdmin";
import * as productController from "./productAdmin";

// Funciones de usuario ----------------------------------------------------------------

export async function registerUser(
  name: String,
  email: String,
  phone: String,
  password: String
) {
  return await userController.registerUser(name, email, phone, password);
}

export async function updateUser(
  name: String,
  email: String,
  photo: String,
  password: String
) {}

// Funciones de carrito ----------------------------------------------------------------

export async function getCart(idUser: String) {
  return await cartController.getCart(idUser);
}

// Funciones de categorías -------------------------------------------------------------

export async function registerCategory(name: String) {
  return await categoryController.registerCategory(name);
}

export async function updateCategory(categoryId: String, newName: String) {
  return await categoryController.editCategory(categoryId, newName);
}

export async function getCategories() {
  return await categoryController.getCategories();
}

export async function getCategory(categoryId: String) {
  return await categoryController.getCategory(categoryId);
}

export async function getSubCategories(fatherCategory: String) {
  return await categoryController.getSubCategories(fatherCategory);
}

export async function deleteCategory(categoryId: String) {
  return await categoryController.deleteCategory(categoryId);
}

export async function registerSubcategory(
  name: String,
  fatherCategory: String
) {
  return await categoryController.registerSubCategory(name, fatherCategory);
}

// Funciones de publicaciones -----------------------------------------------------------

export async function getPublication(publicationId: String) {
  return await publicationController.getPublication(publicationId);
}

export async function getPublications() {
  return await publicationController.getPublications();
}

export async function getPublicationsByCategory(categoryId: String) {
  return await publicationController.getPublicationsByCategory(categoryId);
}

export async function getPublicationsByTags(tags: String[]) {
  return await publicationController.getPublicationsByTags(tags);
}

export async function registerPublication(
  description: String,
  tags: String,
  categoryId: String,
  photoPath: String
) {
  return await publicationController.registerPublication(
    description,
    tags,
    categoryId,
    photoPath
  );
}

export async function updatePublication(
  publicationId: String,
  description: String,
  tags: String,
  categoryId: String,
  photoPath: String
) {
  return await publicationController.updatePublication(
    publicationId,
    description,
    tags,
    categoryId,
    photoPath
  );
}

export async function deletePublication(publicationId: String) {
  return await publicationController.deletePublication(publicationId);
}

// Funciones de productos --------------------------------------------------------------

export async function registerProduct(
  name: String,
  description: String,
  units: Number,
  price: Number,
  photoPath: String
) {
  return await productController.registerProduct(
    name,
    description,
    units,
    price,
    photoPath
  );
}

export async function getProducts() {
  return await productController.getProducts();
}

export async function getProduct(productId: String) {
  return await productController.getProduct(productId);
}

export async function deleteProduct(productId: String) {
  return await productController.deleteProduct(productId);
}

export async function updateProduct(
  productId: String,
  name: String,
  description: String,
  units: Number,
  price: Number,
  photoPath: String
) {
  return await productController.updateProduct(
    productId,
    name,
    description,
    units,
    price,
    photoPath
  );
}

// Funciones de pedidos ----------------------------------------------------------------

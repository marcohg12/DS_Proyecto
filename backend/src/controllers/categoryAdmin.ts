import * as categoryDAO from "../dao_controllers/categoryDAO";

// Registra una categoría
export async function registerCategory(name: String) {
  return await categoryDAO.registerCategory(name);
}

// Actualiza una categoría
export async function editCategory(categoryId: String, newName: String) {
  return await categoryDAO.updateCategory(categoryId, newName);
}

// Obtiene todas las categorías
export async function getCategories() {
  return await categoryDAO.getCategories();
}

// Obtiene una categoría por Id
export async function getCategory(categoryId: String) {
  return await categoryDAO.getCategoryByID(categoryId);
}

// Elimina una categoría por Id
export async function deleteCategory(categoryId: String) {
  return await categoryDAO.deleteCategory(categoryId);
}

// Registra una subcategoría en una categoría
export async function registerSubCategory(
  name: String,
  fatherCategory: String
) {
  return await categoryDAO.registerSubCategory(name, fatherCategory);
}

// Retorna todas las subcategorías de una categoría padre
export async function getSubCategories(fatherCategory: String) {
  return await categoryDAO.getSubCategories(fatherCategory);
}

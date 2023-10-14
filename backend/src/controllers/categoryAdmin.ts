import {
  getCategoryByID,
  getCategoryByName,
  getCategories as getAllCategories,
  getSubCategories as getSubs,
  registerCategory as register,
  editCategory as edit,
  deleteCategory as eliminate,
  registerSubCategory as registerSub,
} from "../dao_controllers/categoryDAO";

export async function registerCategory(name: String) {
  return await register(name);
}

export async function editCategory(categoryId: String, newName: String) {
  return await edit(categoryId, newName);
}

export async function getCategories() {
  return await getAllCategories();
}

export async function getCategory(categoryId: String) {
  return await getCategoryByID(categoryId);
}

export async function deleteCategory(categoryId: String) {
  return await eliminate(categoryId);
}

export async function registerSubCategory(
  name: String,
  fatherCategory: String
) {
  return await registerSub(name, fatherCategory);
}

export async function getSubCategories(fatherCategory: String) {
  return await getSubs(fatherCategory);
}

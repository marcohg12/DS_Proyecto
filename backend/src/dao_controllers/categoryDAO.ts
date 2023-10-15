import Category from "../schemas/categoryS";

// Retorna la categoria correspondiente al Id
export async function getCategoryByID(categoryId: String) {
  return await Category.findOne({ _id: categoryId });
}

// Retorna la categoria por el nombre
export async function getCategoryByName(name: String) {
  return await Category.findOne({ name: name });
}

// Retorna todas las categorias
export async function getCategories() {
  let categories = await Category.find({ fatherCategory: null }).select({
    _id: 1,
    name: 1,
  });
  let categoriesArray = categories.map((category) => category.toObject());
  for (let i = 0; i < categoriesArray.length; i++) {
    categoriesArray[i].subs = await getSubCategories(
      String(categoriesArray[i]._id)
    );
  }
  return categoriesArray;
}

// Retorna todas las subcategorias de una categoria
export async function getSubCategories(fatherCategory: String) {
  return await Category.find({ fatherCategory: fatherCategory }).select({
    _id: 1,
    name: 1,
  });
}

// Registra una categoria padre
export async function registerCategory(name: String) {
  const category = new Category({
    name: name,
  });
  return await category.save();
}

// Actualiza una categoría
export async function updateCategory(categoryId: String, name: String) {
  return await Category.updateOne(
    { _id: categoryId },
    { $set: { name: name } }
  );
}

// Elimina la categoria correspondiente al id
export async function deleteCategory(categoryId: String) {
  // Eliminamos las subcategorías de la categoría
  await Category.deleteMany({ fatherCategory: categoryId });
  // Eliminamos la categoría padre
  return await Category.deleteOne({ _id: categoryId });
}

// Registra una subcategoria de una categoría
export async function registerSubCategory(
  name: String,
  fatherCategory: String
) {
  const subcategory = new Category({
    name: name,
    fatherCategory: fatherCategory,
  });
  return await subcategory.save();
}

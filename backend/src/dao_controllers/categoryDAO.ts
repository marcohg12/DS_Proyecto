import Category from "../schemas/categoryS";

//Regresa la categoria correspondiente al id
export async function getCategoryByID(categoryId: String) {
  return await Category.findOne({ _id: categoryId });
}

//Regresa la categoria por el nombre
export async function getCategoryByName(name: String) {
  return await Category.findOne({ name: name });
}

//Regresa todas las categorias
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

//Regresa todas las subcategorias de una categoria
export async function getSubCategories(fatherCategory: String) {
  return await Category.find({ fatherCategory: fatherCategory }).select({
    _id: 1,
    name: 1,
  });
}

//Registra una categoria.
//Solo recibe el nombre, no necesita la categoria padre.
export async function registerCategory(name: String) {
  const category = new Category({
    name: name,
  });
  return await category.save();
}

//Editar el nombre de la categoria.
export async function editCategory(categoryId: String, newName: String) {
  return await Category.updateOne(
    { _id: categoryId },
    { $set: { name: newName } }
  );
}

//Eliminar la categoria correspondiente al id
export async function deleteCategory(categoryId: String) {
  await Category.deleteMany({ fatherCategory: categoryId });
  return await Category.deleteOne({ _id: categoryId });
}

//Registra una subcategoria
//En esta si recibe la referencia a la categoria padre
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

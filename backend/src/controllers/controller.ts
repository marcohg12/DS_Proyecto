import * as userController from "./user_admin";
import * as cartController from "./cart_admin";
import * as categoryController from "./category_admin";
import * as publicationController from "./publication_admin"
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

// Funciones de carrito ----------------------------------------------------------------
export async function getCart(idUser: String) {
  return await cartController.getCart(idUser);
}

// Funciones de administrador ----------------------------------------------------------

/*------------------------------------------
 Funciones de categorías
 -------------------------------------------*/
export async function registerCategory(name:String){
  return await categoryController.registerCategory(name);
}

export async function  editCategory(id_category:String,newName:String){
  return await categoryController.editCategory(id_category,newName)
}

export async function getCategories(){
  return await categoryController.getCategories();
}

export async function getSubCategories(fatherCategory:String) {
  return await categoryController.getSubCategories(fatherCategory);
}

export async function deleteCategory(id_category:String){
  return await categoryController.deleteCategory(id_category);
}

export async function registerSubCategory(name:String,fatherCategory:String){
  return await categoryController.registerSubCategory(name,fatherCategory);
}

/*------------------------------------------
 Funciones de publicaciones
 -------------------------------------------*/

 export async function getPublication(id_publication:String){
  return await publicationController.getPublication(id_publication);
 }

 export async function getPublications(){
  return await publicationController.getPublications();
 }

 export async function getPublicationsByCategory(id_category:String){
  return await publicationController.getPublicationsByCategory(id_category);
 }

 export async function getPublicationsByTags(tags:string[]){
  return await publicationController.getPublicationsByTags(tags);
 }

 export async function registerPublication(
  category:String,
  date:Date,
  description:String,
  tags: string[],
  photoPath:String){

    return await publicationController.registerPublication(category,date,description,tags,photoPath);
  }

  export async function editPublication(
    id_publication:String,
    category:String,
    date:Date,
    description:String,
    photo:String,
    tags:string[]){
    return await publicationController.editPublication(
      id_publication,
      category,
      date,
      description,
      photo,
      tags);
  }

  export async function deletePublication(id_publication:String){
    return await publicationController.deletePublication(id_publication);
  }

  
// Funciones de productos --------------------------------------------------------------

// Registra un producto -------------
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

// Obtiene todos los productos registrados -----------
export async function getProducts() {
  return await productController.getProducts();
}

// Obtiene un producto por su id ---------------------
export async function getProduct(productId: String) {
  return await productController.getProduct(productId);
}

// Elimina un producto por su id ---------------------
export async function deleteProduct(productId: String) {
  return await productController.deleteProduct(productId);
}

// Actualiza los datos de un producto ----------------
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

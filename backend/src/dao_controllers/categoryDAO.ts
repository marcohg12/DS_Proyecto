import Category from "../schemas/categoryS";


//Regresa la categoria correspondiente al id 
export async function getCategoryByID(id_category:String){
    return await Category.findOne({_id: id_category});
}

//Regresa todas las categorias
export async function getCategories(){
    return await Category.find();
}

//Registra una categoria.
//Solo recibe el nombre, no necesita la categoria padre.
export async function registerCategory(name:String){ 
    const category = new Category({
        name:name,
    });
    return await category.save();
}

//Editar el nombre de la categoria.
export async function editCategory(id_category:String,newName:String){
    return await Category.updateOne({_id:id_category},{$set:{name:newName}});
}

//Eliminar la categoria correspondiente al id
export async function deleteCategory(id_category:String){
    return await Category.deleteOne({_id:id_category});
}

//Registra una subcategoria
//En esta si recibe la referencia a la categoria padre
export async function registerSubCategory(name:String,fatherCategory:String){
    const subcategory = new Category({name:name,
        fatherCategory:fatherCategory});
    return await subcategory.save();
}


import {
    getCategoryByID,
    getCategoryByName,
    getCategories as getAllCategories,
    getSubCategories as getSubs,
    registerCategory as register,
    editCategory as edit,
    deleteCategory as eliminate,
    registerSubCategory as registerSub,
} from "../dao_controllers/categoryDAO"

export async function registerCategory(name:String){
    try{
        const result = await getCategoryByName(name);
        if(result){
            return {
                error: true,
                message: "Ya se encuentra registrada una categoría con ese nombre",
            };
        }else{
            await register(name);
            return {
                error: false,
                message: "Categoría creada exitosamente",
            };
        }
    }catch(error){
        return {
            error: true,
            message: "Ocurrió un error inesperado, intente de nuevo",
        };
    }
}

export async function editCategory(id_category:String,newName:String){
    try{
        const result = await getCategoryByName(newName);
        if(result){
            return {
                error: true,
                message: "Ya existe una categoría con el nombre elegido",
            };
        }else{
            await edit(id_category,newName);
            return{
                error:false,
                message: "Se ha cambiado el nombre de la categoría con éxito",
            };
        }
    }catch(error){
        return{
            error: true,
            message:  "Ocurrió un error inesperado, intente de nuevo",
        };
    }
}

export async function getCategories(){
    try{
        const result = await getAllCategories();
        if(result){
            return{
                error: false,
                message: "Se han consultado todas las categorías exitosamente",
                result: result,
            };
        }else{
            return{
                error: true,
                message: "No se han encontrado categorías",
            };
        }
    }catch(error){
        return {
            error: true,
            message:  "Ocurrió un error inesperado, intente de nuevo",
        };
    }
}

export async function deleteCategory(id_category:String){
    try{
        const hasSubCategories = await getSubs(id_category);
        if(hasSubCategories.length>0){
            return{
                error:true,
                message: "No se puede eliminar la categoría ya que tiene subcategorías presentes",
            }
        }
        const result = await eliminate(id_category);
        if(result.deletedCount == 1){
            return{
                error: false,
                message: "Se ha eliminado exitosamente la categoría",
            };
        }else{
            return{
                error: true,
                message: "No se ha eliminado exitosamente la categoría",
            };
        }
    }catch(error){
        return{
            error: true,
            message:  "Ocurrió un error inesperado, intente de nuevo",
        };
    }
}

export async function registerSubCategory(name:String,fatherCategory:String){
    try{
        const existsFather = await getCategoryByID(fatherCategory);
        if(!existsFather){
            return{
                error:true,
                message: "No existe la categoría padre",
            };
        }
        const result = await getCategoryByName(name);
        if(result){
            return {
                error: true,
                message: "Ya existe una categoría con ese nombre",
            };
        }else{
            await registerSub(name,fatherCategory);
            return{
                error: false,
                message: "Se ha registrado exitosamente la subcategoría",
            };
        }
    }catch(error){
        return{
            error: true,
            message:  "Ocurrió un error inesperado, intente de nuevo",
        };
    }
}

export async function getSubCategories(fatherCategory:String){
    try{
        const existsFather = await getCategoryByID(fatherCategory);
        if(!existsFather){
            return{
                error: true,
                message: "No existe la categoría padre seleccionada",
            };
        }else{
            const result = await getSubs(fatherCategory);
            return{
                error: false,
                message: "Se consultaron exitosamente todas las subcategorías",
                result: result,
            };
        }
    }catch(error){
        return{
            error: true,
            message:  "Ocurrió un error inesperado, intente de nuevo",
        };
    }
}

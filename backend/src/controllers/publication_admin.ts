import {
    getPublication as getOne,
    getPublications as getMany,
    getPublicationsByCategory as getCategory,
    getPublicationsByTags as getTags,
    registerPublication as register,
    editPublication as edit,
    deletePublication as eliminate,
} from "../dao_controllers/publicationDAO"

export async function getPublication(id_publication: String){
    try{
        const publication = await getOne(id_publication);
        if(publication){
            return {
                error: false,
                message: "Se ha consultado con éxito la publicación",
                publication: publication,
            };
        }else{
            return {
                error: true,
                message: "No se ha podido consultar la publicación",
            };
        }
    }catch(error){
        return{
            error: true,
            message: "Ocurrió un error inesperado, intente de nuevo",
        };
    }
}

export async function getPublications(){
    try{
        const publications = await getMany();
        if(publications.length <= 0){
            return{
                error: true,
                message: "No se encontraron publicaciones",
            };
        }else{
            return{
                error: false,
                message: "Se han consultado las publicaciones de manera exitosa",
                publications: publications,
            };
        }
    }catch(error){
        return {
            error: true,
            message: "Ocurrió un error inesperado, intente de nuevo",
        }
    };
}

export async function getPublicationsByCategory(id_category:String){
    try{
        const publications = await getCategory(id_category);
        if(publications.length <=0){
            return{
                error: true,
                message: "No hay publicaciones con dicha categoría",
            };
        }else{
            return{
                error: false,
                message: "Se han consultado exitosamente las publicaciones con dicha categoría",
                publications: publications,
            }
        }
    }catch(error){
        return{
            error: true,
            message: "Ocurrió un error inesperado, intente de nuevo",
        };
    }
}

export async function getPublicationsByTags(tags: string[]){
    try{
        const publications = await getTags(tags);
        if(publications.length <= 0){
            return {
                error: true,
                message: "No se encontraron publicaciones con los tags específicados",
            };
        }else{
            return{
                error:false,
                message: "Se han consultado con éxito las publicaciones con los tags especificados",
            };
        }
    }catch(error){
        return{
            error: true,
            message: "Ocurrió un error inesperado, intente de nuevo",
        }
    }
}

export async function registerPublication(category:String,date:Date,description:String,
    photo:String,tags: string[]){
    try{
        await register(category,date,description,photo,tags);
        return{
            error: false,
            message: "Publicación registrada con éxito",
        };
    }catch(error){
        return{
            error: true,
            message: "Ocurrió un error inesperado, intente de nuevo",
        };
    }
}

export async function editPublication(id_publication:String,category:String,date:Date,
    description:String,photo:String,tags:string[]){
    try{
        await edit(id_publication,category,date,description,photo,tags);
        return{
            error: false,
            message: "La publicación se actualizó correctamente",
        };
    }catch(error){
        return{
            error: false,
            message: "Ocurrió un error inesperado, intente de nuevo",
        };
    }
}

export async function deletePublication(id_publication:String){
    try{
        const deleted = await eliminate(id_publication);
        if(deleted.deletedCount ==1){
            return{
                error: false,
                message: "Se ha eliminado exitosamente la publicación",
            };
        }else{
            return {
                error: true,
                message: "No se ha eliminado de forma correcta la publicación",
            };
        }
    }catch(error){
        return {
            error: true,
            message: "Ocurrió un error inesperado, intente de nuevo",
        };
    }
}




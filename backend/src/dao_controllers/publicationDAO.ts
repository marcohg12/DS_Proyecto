import Publication from '../schemas/publicationS'

//Se trae una publicacion por su id
export async function getPublication(id_publication:String) {
    return await Publication.findOne({_id: id_publication});
}

//Se trae todas las publicaciones
export async function getPublications(){
    return await Publication.find();
}

//Se trae las publicaciones de la categoria por el id
export async function getPublicationsByCategory(id_category:String){
    return await Publication.find({category:id_category});
}

//Se trae las publicaciones por los tags
export async function getPublicationsByTags(){
    return;
}

export async function registerPublication(category:String, date:Date, description:String,
photo:String,tags: string[]){

    const publication = new Publication({
        category: category,
        date: date,
        description: description,
        photo: photo,
        tags: tags
    });

    return await publication.save();
}

//Faltan los de edit


//Elimina una publicacion por su id
export async function deletePublication(id_publication:String) {
    return await Publication.deleteOne({_id:id_publication});
}
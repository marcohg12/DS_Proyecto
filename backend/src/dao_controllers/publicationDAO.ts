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
export async function getPublicationsByTags(tags: string[]){
    return await Publication.find({tags : {$in: tags}});
}

export async function registerPublication(category:String, date:Date, description:String,tags: string[]){
    const publication = new Publication({
        category: category,
        date: date,
        description: description,
        photo: "TEMPORAL",
        tags: tags
    });

    const result = await publication.save();
    await Publication.updateOne(
        { _id: result._id },
        { photo: "/photos/publications/" + result._id + ".png" }
      );
    return result._id;
}

//Faltan los de edit

export async function editPublication(id_publication:String,category:String,date:Date,
    description:String,photo:String,tags: string[]){

    return await Publication.updateOne({_id:id_publication},{category: category,
        date: date,
        description: description,
        photo: photo,
        tags: tags})
    }


//Elimina una publicacion por su id
export async function deletePublication(id_publication:String) {
    return await Publication.deleteOne({_id:id_publication});
}